const db = require("../config/connection");
const { User, Message, ListedItem } = require("../models");

const seedUsers = require("./seedUsers");
const seedMessages = require("./seedMessages");
const seedListedItems = require("./seedListedItems");

db.once("open", async () => {
    console.log("//////////////CLEARING OLD DATA//////////////");
    await User.deleteMany({});
    await ListedItem.deleteMany({});
    await Message.deleteMany({});

    console.log("//////////////SEEDING USER DATA//////////////");
    await seedUsers();

    console.log("//////////////SEEDING MESSAGE DATA///////////");
    await Message.insertMany(seedMessages);

    console.log("//////////////SEEDING ITEM DATA//////////////");
    await ListedItem.insertMany(seedListedItems);

    console.log("Finished!");
    process.exit(0);
});
