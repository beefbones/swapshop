const mongoose = require("mongoose");
const { Schema } = mongoose;

const listedItemSchema = new Schema({
    iconURL: String,
    title: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    messages: [{ type: mongoose.Types.ObjectId, ref: "Message" }],
});

const listedItem = mongoose.model("ListedItem", listedItemSchema);

module.exports = listedItem;
