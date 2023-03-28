const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    listedItems: [{ type: mongoose.Types.ObjectId, ref: "ListedItem" }],
    messages: [{ type: mongoose.Types.ObjectId, ref: "Message" }],
});

userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
