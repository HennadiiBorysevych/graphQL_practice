const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ URL }) => {
  console.log(`API IS RUNNING AT: ${URL}`);
});
