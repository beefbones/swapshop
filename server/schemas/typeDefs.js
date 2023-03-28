const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        hashedPass: String
        email: String
        listedItems: [ListedItem]
        messages: [Message]
    }

    type Message {
        _id: ID
        content: String
        createdAt: Int
        userID: ID
        itemID: ID
    }

    type ListedItem {
        _id: ID
        iconURL: String
        title: String
        description: String
        createdAt: Int
        messages: [Message]
    }

    type Query {
        users: [User]
        user(_id: ID!): User
        messages: [Message]
        message(_id: ID!): Message
        listedItems: [ListedItem]
        listedItem(_id: ID!): ListedItem
    }

    type Mutation {
        
    }
`;

module.exports = typeDefs;
