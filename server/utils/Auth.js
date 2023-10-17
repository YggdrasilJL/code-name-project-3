const {GraphQLError} = require("graphql")
const jwt = require("jsonwebtoken")
const jwt_decode = require('jwt-decode');

const secret = '397A2859675EC4E447E66917F8BB8'


const expiration = "2h"

module.exports = {
  AuthenticationError: new GraphQLError("Could not authenticate user.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),
  authMiddleware: function ({req}) {
    let token = req.body.token || req.query.token || req.headers.authorization

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim()
    }

    if (!token) {
      return req
    }

    try {
      const {data} = jwt.verify(token, secret, {maxAge: expiration})
      req.user = data
    } catch {
      console.log("Invalid token")
    }

    return req
  },
  signToken: function ({email, username, _id}) {
    const payload = {email, username, _id}
    return jwt.sign({data: payload}, secret, {expiresIn: expiration})
  },
  decodeToken: function (token) {
    return jwt_decode(token)
  }
};