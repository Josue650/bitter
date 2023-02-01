// /config/checkToken.js
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  let token = req.get('Authorization') || req.query.token
  if (token) {
    token = token.replace('Bearer ', '')
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      console.log(decoded)
      req.user = err ? null : decoded.user
      req.exp = err ? null : new Date(decoded.exp * 1000)
      res.locals.data.email = err ? null : decoded.user.email
      res.locals.data.profile = err ? null : decoded.user.profile
      console.log("JWT: ", res.locals.data)

      // console.log(res.locals.data.username)
    })
    return next()
  } else {
    req.user = null
    return next()
  }
}