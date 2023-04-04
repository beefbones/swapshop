const router = require("express").Router();
//const cloudinary = require('../utils/cloudinary')
const { ListedItem } = require("../models");

router.get("/", async (req, res) => {
    try {
        let listedItemData;
        if (req.body._id) {
            listedItemData = await ListedItem.findById(req.body._id);
        } else {
            listedItemData = await ListedItem.find({});
        }

        res.json(listedItemData);
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

router.post("/", async(req, body) => {
    const Title = req.body.title
    const IconURL = req.body.iconURL
    const Description = req.body.description

    const formData = new ListedItem({
        title: Title,
        iconURL: IconURL,
        description: Description
    })

    try{
        await formData.save()
    } catch(err) {
        console.log(err)
    }
})

router.put("/", async (req, res) => {
    try {
        const updatedListedItem = await ListedItem.findByIdAndUpdate(req.body._id, req.body, { returnDocument: "after" });
        if (updatedListedItem) {
            res.send(`ListedItem: ${updatedListedItem.title} updated successfully!`);
        } else {
            throw new Error(`No listedItem found by id ${req.body._id}!`);
        }
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

router.delete("/", async (req, res) => {
    try {
        const deletedListedItem = await ListedItem.findByIdAndDelete(req.body._id);
        if (deletedListedItem) {
            res.send(`ListedItem: ${deletedListedItem.title} deleted successfully!`);
        } else {
            throw new Error(`No listedItem found by id ${req.body._id}!`);
        }
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

module.exports = router;
