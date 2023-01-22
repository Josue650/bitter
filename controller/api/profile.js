//needs work. Error message reads cannot define profile when creating profile


require('dotenv').config()
const Profile = require('../../models/profile')
const User = require("../../models/user")

const getProfile = async (req, res, next) => {
    try {
        const foundProfile = await Profile.findOne({ profile: res.locals.data.profile })
        res.locals.data.profile = foundProfile
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//DELETE
// const destroyProfile = async (req, res, next) => {
//     try {
//         const deletedProfile = await Profile.findByIdAndDelete(req.params.id)
//         res.locals.data.profile = deletedProfile
//         next()
//     } catch (error) {
//         res.status(400).json({ msg: error.message })
//     }
// }


//UPDATE
const updateProfile = async (req, res, next) => {
    try {

        const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true })
        // console.log(updatedProfile)
        res.locals.data.profile = updatedProfile
        console.log(res.locals.data.profile)
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//CREATE
const createProfile = async (req, res, next) => {
    try {
        const createdProfile = await Profile.create(req.body)
        const user = await User.findOne({ email: res.locals.data.email })
        console.log(user)
        user.profile = createdProfile
        console.log(user.profile)
        await user.save()
        res.locals.data.profile = createdProfile
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const getUserTweets = async (req, res, next) => {
    try {

        const profile = await Profile.findOne({ profile: res.locals.data.profile }).populate('tweets').sort('tweets.createdAt').exec()

        const tweets = profile.tweets
        res.locals.data.tweets = tweets
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//RESPOND
const respondWithProfile = (req, res) => {
    res.json(res.locals.data.profile)
}

const respondWithTweets = (req, res) => {
    res.json(res.locals.data.tweets)
}

module.exports = {
    getProfile,
    // destroyProfile,
    updateProfile,
    createProfile,
    getUserTweets,
    respondWithProfile,
    respondWithTweets
}