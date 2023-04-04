const { ListedItem } = require("../models");

const listedItemData = [
    {
        _id: "642224350cb49b649fc08b88",
        iconURL:
            "https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=655&q=80",
        title: "Vitamix Propel Series 510 Blender",
        description:
            "Bounght this blender thinking it was going to change my life. Spoiler alert...it didn't. I barely use it and feel guilty having it. Only used 5-6 times, so it's still in great condition. Maybe this is what YOU need to get your life together?!",
        createdAt: new Date(2023, 2, 22, 10, 15, 2, 2),
        messages: ["642223c56a1c709f2408c753"],
        userEmail: "joenotexotic@gmail.com",
    },
    {
        _id: "6422243fcab6893c93fc6bbe",
        iconURL:
            "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        title: "Black High Top Converse",
        description:
            "Black high top Converse (men's size 10). Classic and iconic shoe style that features a black canvas upper with white rubber toe caps and soles. Versatile and can be dressed up or down for a any occasions.",
        createdAt: new Date(2023, 2, 18, 19, 15, 8, 2),
        messages: ["642223d230dc7414bffa17b5"],
        userEmail: "emailisevil@gmail.com",
    },
    {
        _id: "642224479dcc661bab95748b",
        iconURL:
            "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Women's Jean Shorts",
        description: "Women's jean shorts (size 4) up for grabs. Too small for me, so I'm looking to rehome them.",
        createdAt: new Date(2023, 1, 28, 6, 8, 2, 8),
        messages: ["642223dac58858e7be01797a"],
        userEmail: "alangarnerh@gmail.com",
    },
    {
        _id: "6422244f146ccda633fd22af",
        iconURL:
            "https://images.unsplash.com/photo-1517612228538-cefdbc2c01e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Satchel",
        description:
            "Brown leather satchel (not a purse) in near perfect condition. Used one night then never again. Plenty of pockets for all your storage needs.",
        createdAt: new Date(2023, 2, 22, 10, 15, 2, 2),
        messages: ["642223e43ffc5930f7f20f07"],
        userEmail: "alangarnerh@gmail.com",
    },
    {
        _id: "642224559bbf5dce07463d21",
        iconURL:
            "https://images.unsplash.com/photo-1637915179148-c8f7f8affbf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
        title: "Vacuum",
        description:
            "Only used a few times when I realized I needed something with more power to vacuum the whole house. This is perfect for small rooms!",
        createdAt: new Date(2023, 2, 26, 22, 5, 4, 6),
        messages: [],
        userEmail: "emailisevil@gmail.com",
    },
    {
        _id: "6422245f14592e7ce6712d55",
        iconURL:
            "https://images.unsplash.com/photo-1608461864721-b8f50c91c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "Women's Black Belt",
        description: "Nothing wrong with the item. Just looking to change up my style by swapping for new pieces.",
        createdAt: new Date(2023, 2, 17, 2, 8, 5, 5),
        messages: [],
        userEmail: "pawneegoddess@gmail.com",
    },
    {
        _id: "6422246c7e68f74130a53178",
        iconURL:
            "https://images.unsplash.com/photo-1623321673989-830eff0fd59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80",
        title: "Gold Necklace",
        description: "Perfect dainty gold necklace for every day wear. Goes with a lot of outfits.",
        createdAt: new Date(2023, 2, 5, 16, 15, 8, 2),
        messages: [],
        userEmail: "joenotexotic@gmail.com",
    },
    {
        _id: "6422247439477da7872fa584",
        iconURL:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
        title: "Men's Plain White Tee-Large",
        description: "Men's large white t-shirt. Shrunk in the dryer, so it fits more like a medium.",
        createdAt: new Date(2023, 2, 6, 18, 4, 4, 4),
        messages: [],
        userEmail: "joenotexotic@gmail.com",
    },
    {
        _id: "6422247b26f43f6bfc237de8",
        iconURL:
            "https://images.unsplash.com/photo-1637906270495-da532e145f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
        title: "iPhone 13 Pro Phone Case",
        description: "Gently used iPhone 13 pro phone case. Some discoloration on the edges, but otherwise in good shape.",
        createdAt: new Date(2023, 1, 14, 18, 10, 3, 2),
        messages: [],
        userEmail: "pawneegoddess@gmail.com",
    },
    {
        _id: "64222484eab882fce3978d3c",
        iconURL:
            "https://images.unsplash.com/photo-1610244767159-0f9797ff1926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "Two Piece Luggage Set",
        description:
            "Two piece luggage set. One medium and one small rolling suitcase in excellent coniditon. Just not travelling as much as we used to, so they are rarely used anymore.",
        createdAt: new Date(2023, 1, 22, 12, 15, 8, 8),
        messages: [],
        userEmail: "nothisispatrick@gmail.com",
    },
    {
        _id: "6422248c27938db3fde43e24",
        iconURL:
            "https://images.unsplash.com/photo-1565452344518-47faca79dc69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        title: "Coffee Maker",
        description: "Coffe maker available. Still in perfect condition. Upgraded to a single serve machine and need this one off the counter.",
        createdAt: new Date(2023, 1, 20, 9, 10, 6, 3),
        messages: ["642223d230dc7414bffa17b5"],
        userEmail: "pawneegoddess",
    },
    {
        _id: "642224948f7bb879f1fd7c5d",
        iconURL:
            "https://images.unsplash.com/photo-1568910748155-01ca989dbdd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Echo Dot (3rd Gen)",
        description:
            "3rd generation echo dot available. Not new, but practiclaly never used. We unplugged it once we found oud it was listening to us and now it's just collecting dust.",
        createdAt: new Date(2023, 2, 13, 18, 15, 7, 7),
        messages: [],
        userEmail: "nothisispatrick@gmail.com",
    },
];

const seedListedItems = async () => {
    await ListedItem.insertMany(listedItemData);
};

module.exports = seedListedItems;
