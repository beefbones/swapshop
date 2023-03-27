const { ListedItem } = require("../models");

const listedItemData = [];

const seedListedItems = async () => {
    await ListedItem.insertMany(listedItemData);
};

module.exports = seedListedItems;
