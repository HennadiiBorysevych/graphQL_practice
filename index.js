const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ URL }) => {
  console.log(`API IS RUNNING AT: ${URL}`);
});
