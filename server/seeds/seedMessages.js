const { Message } = require("../models");

const messageData = [
    {
        _id: "642223c56a1c709f2408c753",
        content: "I'm interested in the blender you have listed. Would you be willing to swap for the luggage set I have available?",
        createdAt: new Date(2023, 2, 24, 22, 15, 8, 7),
        userID: "641f1185e364dac4d6e5bd14",
        itemID: "642224350cb49b649fc08b88"
    },
    {
        _id: "642223d230dc7414bffa17b5",
        content: "Would love to swap for the converse. Any interest in swapping for a backpack?",
        createdAt: new Date(2023, 2, 19, 10, 10, 3, 6),
        userID: "641f11998be4cb11c189e2ea",
        itemID: "6422243fcab6893c93fc6bbe"
    },
    {
        _id: "642223dac58858e7be01797a",
        content: "The shorts are still available. I'm cool with swapping for the shoes!",
        createdAt: new Date(2023, 2, 5, 22, 12, 2, 2),
        userID: "641f11aded7dde2fe92ac5d5",
        itemID: "642224479dcc661bab95748b"
    },
    {
        _id: "642223e43ffc5930f7f20f07",
        content: "That's perfect! Swapping my sunglasses for your satchel sounds like a great idea!",
        createdAt: new Date(2023, 2, 25, 21, 15, 7, 7),
        userID: "641f11c0a345f90ada38e096",
        itemID: "6422244f146ccda633fd22af"
    },
];

const seedMessages = async () => {
    await Message.insertMany(messageData);
};

module.exports = seedMessages;
