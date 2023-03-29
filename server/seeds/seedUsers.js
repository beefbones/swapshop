const { User } = require("../models");

const userData = [
    {
        _id: "641f1185e364dac4d6e5bd14",
        username: "patrickstar",
        password: "password1",
        email: "nothisispatrick@gmail.com",
        listedItems: ["64222484eab882fce3978d3c", "642224948f7bb879f1fd7c5d"],
        messages: ["642223c56a1c709f2408c753"]
    },
    {
        _id: "641f11998be4cb11c189e2ea",
        username: "pawneegoddess",
        password: "password2",
        email: "pawneegoddess@gmail.com",
        listedItems: ["6422245f14592e7ce6712d55", "6422248c27938db3fde43e24"],
        messages: ["642370b3a693ff1406a2eee4", "642223d230dc7414bffa17b5"]
    },
    {
        _id: "641f11aded7dde2fe92ac5d5",
        username: "tigerking",
        password: "password3",
        email: "joenotexotic@gmail.com",
        listedItems: ["642224350cb49b649fc08b88", "6422246c7e68f74130a53178", "6422247b26f43f6bfc237de8"],
        messages: ["642223dac58858e7be01797a"]
    },
    {
        _id: "641f11b8bf6f41367ea414e8",
        username: "alien_believer",
        password: "password4",
        email: "emailisevil@gmail.com",
        listedItems: ["6422243fcab6893c93fc6bbe", "642224559bbf5dce07463d21"],
        messages: [""]
    },
    {
        _id: "641f11c0a345f90ada38e096",
        username: "wolfpackof1",
        password: "password5",
        email: "alangarnerh@gmail.com",
        listedItems: ["642224479dcc661bab95748b", "6422244f146ccda633fd22af", "6422247439477da7872fa584"],
        messages: ["642223e43ffc5930f7f20f07"]
    },
];

const seedUsers = async () => {
    await User.insertMany(userData);
};

module.exports = seedUsers;
