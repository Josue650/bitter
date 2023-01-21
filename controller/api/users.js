const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
  console.log('req.user', req.user)
  res.json(req.exp)
}

const dataController = {
  async create (req, res, next) {
    try {
      const user = await User.create(req.body)
      const token = createJWT(user)
      res.locals.data.user = user
      res.locals.data.token = token
      console.log(token)
      
      next()
    } catch (err) {
      console.log('Error!')
      res.status(400).json(err)
    }
  },

  async login (req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) throw new Error()
      const match = await bcrypt.compare(req.body.password, user.password)
      if (!match) throw new Error()
      res.locals.data.user = user
      res.locals.data.token = createJWT(user)
      // console.log(res.locals.data.token)
      next()
    } catch (err) {
      res.status(400).json('Bad Credentials')
    }
  }
}

const apiController = {
  auth (req, res) {
    res.json(res.locals.data.token)
  }
}

module.exports = {
  checkToken,
  dataController,
  apiController
}

function createJWT (user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}
