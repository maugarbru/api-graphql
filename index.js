const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')

// Server creation
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Server start
server.listen().then(({url}) => {
    console.log(`Servidor listo en: ${url}`);
})