const db = require('../config/connection');
const { User, ListedItem, Message } = require('../models');

const userData = require('./userData.json')
const messageData = require('./messageData.json')
const listedItems = require('./listedItems.json')

db.once('open', async () => {
    await User.deleteMany({});

    const users = await User.insertMany(userData);

    console.log('Data seeded!');
    process.exit(0);
});