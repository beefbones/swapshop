const express = require("express");
const path = require("path");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Create a new instance of an Apollo server with the GraphQL schema

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
