const { expressjwt: jwt } = require('express-jwt');
const jwks = require('jwks-rsa');

exports.jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: `https://${process.env.VITE_AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.VITE_AUTH0_API_IDENTIFIER,
  issuer: `https://${process.env.VITE_AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
});
