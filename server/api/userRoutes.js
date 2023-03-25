const router = require("express").Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/", async (req, res) => {
    try {
        let userData;
        if (req.body._id) {
            userData = await User.findById(req.body._id).populate("listedItems").populate("messages");
        } else {
            userData = await User.find({});
        }

        res.json(userData);
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

router.post("/", async (req, res) => {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, saltRounds);
        const newUser = req.body;
        newUser.hashedPass = hashedPass;
        delete newUser.password;
        const newUserData = await User.create(newUser);
        res.send(`${newUserData.username} created successfully!`);
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

router.delete("/", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.body._id);
        if (deletedUser) {
            res.send(`${deletedUser.username} (id: ${deletedUser._id}) deleted successfully!`);
        } else {
            throw new Error(`No user found by id ${req.body._id}!`);
        }
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

module.exports = router;
