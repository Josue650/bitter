const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// const { Profiler } = require('react')
const Profile = require("../../models/profile")

const checkToken = (req, res) => {
  console.log('req.user', req.user)
  res.json(req.exp)
}

const dataController = {
  async create(req, res, next) {
    try {
      const user = await User.create(req.body)
      
      
      const createdProfile = await Profile.create({})
      user.profile = createdProfile._id
      console.log("User: ", user)
      const token = createJWT(user)
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
      console.log('Error!')
      res.status(400).json(err)
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

  // async getUserTweets (req, res, next) {
  //   try {
  //     const user = await User.findOne({ email: res.locals.data.email }).populate("tweets").sort("tweets.createdAt").exec()
  //     const tweets = user.tweets
  //     res.locals.data.tweets = tweets
  //     next()
  //   } catch(error) {
  //     res.status(400).json({msg: error.message})
  //   }
  // }
  async getUserProfile(req, res, next) {
    try {
      const user = await User.findOne({ email: req.user.email }).populate("profile").exec()
      const foundProfile = user.profile
      res.locals.data.profile = foundProfile
      next()
    } catch (error) {
      res.status(400).json({ msg: error.message })
    }
  }, 
//   async updateProfile (req, res, next) {
//     try {
//       const user = await User.findOne({ email: res.locals.data.email }).populate("profile").exec()

//         const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         // console.log(updatedProfile)
//         res.locals.data.profile = updatedProfile
//         console.log(res.locals.data.profile)
//         next()
//     } catch (error) {
//         res.status(400).json({ msg: error.message })
//     }
// }
}

const apiController = {
  auth(req, res) {
    res.json(res.locals.data.token)
  },
  respondWithProfile(req, res) {
    res.json(res.locals.data.profile)
  }
}

module.exports = {
  checkToken,
  dataController,
  apiController
}

function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '48h', allowInsecureKeySizes: true }
  )
}
