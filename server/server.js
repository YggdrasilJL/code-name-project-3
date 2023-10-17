const express = require("express")
const { ApolloServer } = require("@apollo/server")
const { expressMiddleware } = require("@apollo/server/express4")
const { authMiddleware } = require("./utils/Auth")
const path = require("path")
const Stripe = require("stripe")
const cors = require("cors")
const { authUrl } = require("./utils/googleOAuth");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

require("dotenv").config()

const { typeDefs, resolvers } = require("./schemas/")
const db = require("./config/connection")


const app = express()
const PORT = process.env.PORT || 3002
const server = new ApolloServer({
  typeDefs,
  resolvers,
})


const startApolloServer = async () => {
  await server.start()

  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use(cors())

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`)
      console.log(`🌍 Now listening on localhost:${PORT}/graphql`)
    })
  })
}

startApolloServer()
