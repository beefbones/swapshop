const router = require("express").Router();
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

router.post("/", async (req, res) => {
    try {
        const newListedItemData = await ListedItem.create(req.body);
        res.send(`ListedItem: ${newListedItemData.title} created successfully!`);
    } catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
});

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
