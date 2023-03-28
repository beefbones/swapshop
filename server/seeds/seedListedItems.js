const { ListedItem } = require("../models");

const listedItemData = [
    {
        _id: "642224350cb49b649fc08b88",
        iconURL: "",
        title: "Vitamix Propel Series 510 Blender",
        description: "Bounght this blender thinking it was going to change my life. Spoiler alert...it didn't. I barely use it and feel guilty having it. Only used 5-6 times, so it's still in great condition. Maybe this is what YOU need to get your life together?!"
    },
    {
        _id: "6422243fcab6893c93fc6bbe",
        iconURL: "",
        title: "Black High Top Converse",
        description: "Black high top Converse (men's size 10). Classic and iconic shoe style that features a black canvas upper with white rubber toe caps and soles. Versatile and can be dressed up or down for a any occasions."
    },
    {
        _id: "642224479dcc661bab95748b",
        iconURL: "",
        title: "Nike Shorts",
        description: "Black Nike shorts up for grabs. Too big for me, so I'm looking to rehome them."
    },
    {
        _id: "6422244f146ccda633fd22af",
        iconURL: "",
        title: "Satchel",
        description: "Brown leather satchel (not a purse) in near perfect condition. Used one night then never again. Plenty of pockets for all your storage needs."
    },
    {
        _id: "642224559bbf5dce07463d21",
        iconURL: "",
        title: "Vacuum",
        description: "Only used a few times when I realized I needed something with more power to vacuum the whole house. This is perfect for area rugs!"
    },
    {
        _id: "6422245f14592e7ce6712d55",
        iconURL: "",
        title: "Women's Black Belt",
        description: "Nothing wrong with the item. Just looking to change up my style by swapping for new pieces."
    },
    {
        _id: "6422246c7e68f74130a53178",
        iconURL: "",
        title: "Gold Necklace",
        description: "Perfect dainty gold necklace for every day wear. Goes with a lot of outfits."
    },
    {
        _id: "6422247439477da7872fa584",
        iconURL: "",
        title: "Men's Navy Polo-Large",
        description: "Men's large navy polo. Shrunk in the dryer, so it fits more like a medium. Also, a bit faded."
    },
    {
        _id: "6422247b26f43f6bfc237de8",
        iconURL: "",
        title: "iPhone 13 Phone Case",
        description: "Gently used iPhone 13 phone case. Some discoloration on the edges, but otherwise in good shape."
    },
    {
        _id: "64222484eab882fce3978d3c",
        iconURL: "",
        title: "Two Piece Luggage Set",
        description: "Two piece luggage set. One medium and one small rolling suitcase in excellent coniditon. Just not travelling as much as we used to, so they are rarely used anymore."
    },
    {
        _id: "6422248c27938db3fde43e24",
        iconURL: "",
        title: "Keurig Coffee Maker",
        description: "Single serve Keurig coffe maker available. Still in perfect condition. Upgraded to a larger Keurig machine and need this one off the counter."
    },
    {
        _id: "642224948f7bb879f1fd7c5d",
        iconURL: "",
        title: "Echo Dot (3rd Gen)",
        description: "3rd generation echo dot available. Not new, but practiclaly never used. We unplugged it once we found oud it was listening to us and now it's just collecting dust."
    }
];

const seedListedItems = async () => {
    await ListedItem.insertMany(listedItemData);
};

module.exports = seedListedItems;
