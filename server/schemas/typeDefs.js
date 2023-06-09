const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
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
        userEmail: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(_id: ID!): User
        messages: [Message]
        message(_id: ID!): Message
        listedItems: [ListedItem]
        listedItem(_id: ID!): ListedItem
        me: User
    }

    type Mutation {
        addUser(username: String!, password: String!, email: String!): Auth
        login(email: String!, password: String!): Auth
        addListedItem(title: String!, description: String!, iconURL: String!, userEmail: String!): ListedItem
        addMessage(content: String!, itemID: ID!): Message
        deleteListedItem(_id: ID!): ListedItem
        deleteMessage(_id: ID!): Message
        updateListedItem(_id: ID!, title: String, description: String, iconURL: String): ListedItem
        updateMessage(_id: ID!, content: String!, itemID: ID!): Message
    }
`;

module.exports = typeDefs;
