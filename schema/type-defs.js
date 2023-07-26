const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    year: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = Irish
  }

  input UpdateUsernameInput {
    id: ID!
    username: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
  }

  enum Nationality {
    Mexican
    Italian
    Vietnamese
    Indian
    Spanish
    Chinese
    Irish
    Australian
    British
    Canadian
    Polish
    Russian
    American
  }
`;
module.exports = { typeDefs };
