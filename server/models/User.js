const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    hashedPass: String,
    email: String,
    listedItems: [{ type: mongoose.Types.ObjectId, ref: "ListedItem" }],
    messages: [{ type: mongoose.Types.ObjectId, ref: "Message" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
