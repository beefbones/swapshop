const mongoose = require("mongoose");
const { Schema } = mongoose;

const listedItemSchema = new Schema({
    iconURL: String,
    title: String,
    description: String,
    createdAt: { Date, default: Date.now },
});

const messageSchema = new Schema({
    content: String,
    createdAt: { Date, default: Date.now },
    userID: mongoose.ObjectId,
    itemID: mongoose.ObjectId,
});

const userSchema = new Schema({
    username: String,
    hashedPass: String,
    email: String,
    listedItems: [listedItemSchema],
    messages: [messageSchema],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
