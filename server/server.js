const express = require("express");
const path = require("path");
const apiRoutes = require("./api");
const db = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 3001;
const app = express();
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", apiRoutes);

// Serve up static assets
app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    db.once("open", () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`);
        });
    });
};
startApolloServer(typeDefs, resolvers);
