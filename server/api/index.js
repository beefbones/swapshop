const router = require("express").Router();
const userRoutes = require("./userRoutes");
const messageRoutes = require("./messageRoutes");
const listedItemRoutes = require("./listedItemRoutes");

router.use("Users", userRoutes);
router.use("Messages", messageRoutes);
router.use("ListedItems", listedItemRoutes);

module.exports = router;
