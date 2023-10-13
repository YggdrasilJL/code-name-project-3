const {GraphQLError} = require("graphql")
const jwt = require("jsonwebtoken")
// const jwksClient = require('jwks-rsa');

const secret = "mysecretssshhhhhhh"
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
}

// const client = jwksClient({
//     jwksUri: `https://dev-2kax28qvyzlsa7s0.us.auth0.com/.well-known/jwks.json`
// });

// function getKey(header, cb) {
//     client.getSigningKey(header.kid, function (err, key) {
//         var signingKey = key.publicKey || key.rsaPublicKey;
//         cb(null, signingKey);
//     });
// }

// const options = {
//     audience: 'qGqfNVoVpHZlptcz8qAgV5k6H7qCShVU',
//     issuer: `https://dev-2kax28qvyzlsa7s0.us.auth0.com/`,
//     algorithms: ['RS256']
// };

// module.exports = {
//     verifyToken: ({ req }) => {
//         const token = req.headers.authorization;
//         const user = new Promise((resolve, reject) => {
//           jwt.verify(token, getKey, options, (err, decoded) => {
//             if(err) {
//               return reject(err);
//             }
//             resolve(decoded.email);
//           });
//         });

//         return {
//           user
//         };
//     },
//     signToken: () => {

//     },
// }
