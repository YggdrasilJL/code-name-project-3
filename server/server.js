const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
//const { verifyToken } = require('./utils/authMiddleware')
const Stripe = require('stripe');
const cors = require('cors');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

require('dotenv').config();

const { typeDefs, resolvers } = require('./schemas/');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //context: verifyToken
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // Catch-all route for all other routes, which serves 'index.html'
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client//dist/index.html'));
// });

// app.get('*', function (req, res) {
//   res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
// });

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`🌍 Now listening on localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer(typeDefs, resolvers);
