const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
    content: String,
    createdAt: { type: Date, default: Date.now },
    userID: mongoose.ObjectId,
    itemID: { type: mongoose.Types.ObjectId, ref: "ListedItem" },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
