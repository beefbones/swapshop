const { AuthenticationError } = require("apollo-server-express");
const { User, Message, ListedItem } = require("../models");
const { signToken } = require("../utils/auth");

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

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate("messages").populate("listedItems");
            }
            throw new AuthenticationError("You need to be logged in!");
        },
    },

    Mutation: {
        addUser: async(parent),
    },
};

module.exports = resolvers;
