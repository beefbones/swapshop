const router = require("express").Router();
const userRoutes = require("./userRoutes");
const messageRoutes = require("./messageRoutes");
const listedItemRoutes = require("./listedItemRoutes");

router.use("/users", userRoutes);
router.use("/messages", messageRoutes);
router.use("/listedItems", listedItemRoutes);

module.exports = router;
