const router = require("express").Router();
const { Message } = require("../models");

router.get("/", async (req, res) => {
    try {
        let messageData;
        if (req.body._id) {
            messageData = await Message.findById(req.body._id);
        } else {
            messageData = await Message.find({});
        }

        res.json(messageData);
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

router.post("/", async (req, res) => {
    try {
        const newMessageData = await Message.create(req.body);
        res.send(`Message: ${newMessageData._id} created successfully!`);
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

router.put("/", async (req, res) => {
    try {
        const updatedMessage = await Message.findByIdAndUpdate(req.body._id, req.body, { returnDocument: "after" });
        if (updatedMessage) {
            res.send(`Message: ${updatedMessage._id} updated successfully!`);
        } else {
            throw new Error(`No message found by id ${req.body._id}!`);
        }
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

router.delete("/", async (req, res) => {
    try {
        const deletedMessage = await Message.findByIdAndDelete(req.body._id);
        if (deletedMessage) {
            res.send(`Message: ${deletedMessage._id} deleted successfully!`);
        } else {
            throw new Error(`No message found by id ${req.body._id}!`);
        }
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

module.exports = router;
