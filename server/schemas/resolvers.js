const { User, Message, ListedItem } = require("../models");

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate("messages").populate("listedItems");
        },

        user: async (parent, { _id }) => {
            return User.findById(_id).populate("messages").populate("listedItems");
        },

        messages: async () => {
            return Message.find();
        },

        message: async (parent, { _id }) => {
            return Message.findById(_id);
        },

        listedItems: async () => {
            return ListedItem.find();
        },

        listedItem: async (parent, { _id }) => {
            return ListedItem.findById(_id);
        },
    },

    Mutation: {},
};

module.exports = resolvers;
