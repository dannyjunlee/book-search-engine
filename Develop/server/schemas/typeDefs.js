const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        authors: [String]
        # authors: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    input savedBook {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Query {
        getSingleUser(_id: String, username: String): User
    }

    type Mutation {
        createUser(username: String, email: String, password: String): Auth
        login(email: String!, password: String!): Auth
        saveBook(input: savedBook!): User
        deleteBook(bookId: String): User
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;