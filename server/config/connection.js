const { connect, connection } = require("mongoose");

connect("mongodb://localhost/swapshopDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
