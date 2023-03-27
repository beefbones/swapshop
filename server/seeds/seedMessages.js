const { Message } = require("../models");

const messageData = [];

const seedMessages = async () => {
    await Message.insertMany(messageData);
};

module.exports = seedMessages;
