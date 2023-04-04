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

        listedItems: async (_, __, user) => {
            if (!user){ return ListedItem.find(); }
            const userData = User.findById(user.id).populate(listedItems)
            return{userData.listedItems}
            
        },

        listedItem: async (parent, { _id }) => {
            return ListedItem.findById(_id);
        },

        me: async (parent, args, context) => {
            if (!context.user) {
                throw new AuthenticationError("You need to be logged in!");
            }
            return User.findOne({ _id: context.user._id }).populate("messages").populate("listedItems");
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            const isCorrectPassword = user?.isCorrectPassword(password);

            if (!user || !isCorrectPassword) {
                throw new AuthenticationError("Email or password is incorrect!");
            } else {
                const token = signToken(user);
                return { token, user };
            }
        },

        addListedItem: async (parent, args, context) => {
            if (!context.user) {
                throw new AuthenticationError("You need to be logged in!");
            }

            const newItem = await ListedItem.create({ args, userID: context.user._id });
            await User.findByIdAndUpdate(context.user._id, { $push: { listedItems: newItem._id } });

            return newItem;
        },

        addMessage: async (parent, args, context) => {
            if (!context.user) {
                throw new AuthenticationError("You need to be logged in!");
            }

            const newMessage = await Message.create({ args, userID: context.user._id });
            await User.findByIdAndUpdate(context.user._id, { $push: { messages: newMessage._id } });
            await ListedItem.findByIdAndUpdate(newMessage.itemID, {
                $push: { messages: newMessage._id },
                returnDocument: "after",
            });

            return newMessage;
        },
    },
};

module.exports = resolvers;
