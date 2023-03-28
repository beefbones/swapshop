const { User, Message, ListedItem } = require("../models");

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate("messages").populate("listedItems");
        },
    },
};

module.exports = resolvers;
