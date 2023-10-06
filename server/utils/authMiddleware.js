const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
    jwksUri: `https://dev-2kax28qvyzlsa7s0.us.auth0.com/.well-known/jwks.json`
});

function getKey(header, cb) {
    client.getSigningKey(header.kid, function (err, key) {
        var signingKey = key.publicKey || key.rsaPublicKey;
        cb(null, signingKey);
    });
}

const options = {
    audience: 'qGqfNVoVpHZlptcz8qAgV5k6H7qCShVU',
    issuer: `https://dev-2kax28qvyzlsa7s0.us.auth0.com/`,
    algorithms: ['RS256']
};

module.exports = {
    verifyToken: ({ req }) => {
        const token = req.headers.authorization;
        const user = new Promise((resolve, reject) => {
          jwt.verify(token, getKey, options, (err, decoded) => {
            if(err) {
              return reject(err);
            }
            resolve(decoded.email);
          });
        });
    
        return {
          user
        };
    },
    signToken: () => {

    },
}