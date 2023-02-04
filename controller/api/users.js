const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// const { Profiler } = require('react')
const Profile = require("../../models/profile")

const checkToken = (req, res) => {
  // console.log('req.user', req.user)
  res.json(req.exp)
}

const dataController = {
  async create(req, res, next) {
    try {
      const user = await User.create(req.body)


      const createdProfile = await Profile.create({})
      user.profile = createdProfile._id
      // console.log("User: ", user)
      const token = createJWT(user)
      console.log(token)
      res.locals.data.user = user
      res.locals.data.token = token
      console.log(token)


      user.save()

      // user.create(() => {
      //   async (error, createdProfile) =>{
      //     if (error) {
      //       res.status(400).send({
      //         msg: error.message
      //       })
      //     } else {
      //      createdProfile = await Profile.create({})
      //      user.profile = createdProfile
      //      user.save()
      //     }
      //   }
      // })
      console.log(user)
      next()
    } catch (err) {
      res.status(400).json({ msg: err.message})
    }
  },

  async login(req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) throw new Error()
      const match = await bcrypt.compare(req.body.password, user.password)
      if (!match) throw new Error()
      res.locals.data.user = user
      res.locals.data.token = createJWT(user)
      // console.log(res.locals.data.token)
      next()
    } catch (error) {
      res.status(400).json({ msg: error.message })
    }
  },

  async destroy(req, res, next) {
    try {
      const deletedUser = await User.findOneAndDelete({ email: req.body.email })
      res.locals.data.user = deletedUser

      next();
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }

  },

  async getUser(req, res, next) {
    // console.log("req user: ", req.user)

    try {
      const foundUser = await User.findById(req.user)

      res.locals.data.user = foundUser

      next();
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }

  }
}

const apiController = {
  auth(req, res) {
    res.json(res.locals.data.token)
  },
  respondWithProfile(req, res) {
    res.json(res.locals.data.profile)
  },
  respondWithUser(req, res) {
    res.json(res.locals.data.user)
  }
}

module.exports = {
  checkToken,
  dataController,
  apiController
}

function createJWT(user) {
  console.log('jwt', user)
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '48h', allowInsecureKeySizes: true }
  )
}
