const bcrypt = require("bcrypt");
const saltRounds = 10;
const { User } = require("../models");

const userData = [
    {
        _id: "641f1185e364dac4d6e5bd14",
        username: "patrickstar",
        password: "password1",
        email: "nothisispatrick@gmail.com",
    },
    {
        _id: "641f11998be4cb11c189e2ea",
        username: "pawneegoddess",
        password: "password2",
        email: "pawneegoddess@gmail.com",
    },
    {
        _id: "641f11aded7dde2fe92ac5d5",
        username: "tigerking",
        password: "password3",
        email: "joenotexotic@gmail.com",
    },
    {
        _id: "641f11b8bf6f41367ea414e8",
        username: "alien_believer",
        password: "password4",
        email: "emailisevil@gmail.com",
    },
    {
        _id: "641f11c0a345f90ada38e096",
        username: "wolfpackof1",
        password: "password5",
        email: "alangarnerh@gmail.com",
    },
];

const seedUsers = async () => {
    const hashedUserData = await Promise.all(
        userData.map(async (data) => {
            data.hashedPass = await bcrypt.hash(data.password, saltRounds);
            delete data.password;
            return data;
        })
    );

    await User.insertMany(hashedUserData);
};

module.exports = seedUsers;
