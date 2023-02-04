//needs work. Error message reads cannot define profile when creating profile


require('dotenv').config()
const { PowerOffOutlined } = require('@mui/icons-material')
const Profile = require('../../models/profile')
const User = require("../../models/user")

//Get current users profile
const getProfile = async (req, res, next) => {
    console.log(req.query.userId)
    try {
        const user = await User.findOne({ email: res.locals.data.email }).populate("profile").exec()
        console.log('user', user)
        const foundProfile = user.profile

        res.locals.data.profile = foundProfile
        console.log(res.locals.data.profile)
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//Get all profiles
const getAllProfiles = async (req, res, next) => {
    // console.log(req.query.userId)
    try {
        const profiles = await Profile.find({})
        console.log(profiles)
        res.locals.data.profiles = profiles
        // console.log(res.locals.data.profiles)
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//Follow another user's profile
const followProfile = async (req, res, next) => {
    const user = await User.findOne({ email: res.locals.data.email }).populate("profile").exec()
    const currentProfile = user.profile
    console.log(currentProfile)
    if (currentProfile.id !== req.params.followerId) {
        try {
            const profile = await Profile.findById(req.params.followerId)
            if (!profile.followers.includes(currentProfile._id)) {
                await profile.updateOne({ $push: { followers: currentProfile._id } })
                await currentProfile.updateOne({ $push: { followings: profile._id } })
                res.locals.data.profile = currentProfile
                // res.status(200).json("user has been followed");
                next()
            } else {
                res.status(403).json("You already follow this user's profile")
            }
        } catch (error) {
            console.log(req.body)
            res.status(500).json({ msg: error.messgae })
        }
    } else {
        res.status(403).json("You can't follow yourself, you bitter betty")
    }
}

//Follow another user's profile
const unfollowProfile = async (req, res, next) => {
    const user = await User.findOne({ email: res.locals.data.email }).populate("profile").exec()
    const currentProfile = user.profile
    if (currentProfile.id !== req.params.followerId) {
        try {
            const profile = await Profile.findById(req.params.followerId)
            if (profile.followers.includes(currentProfile._id)) {
                await profile.updateOne({ $pull: { followers: currentProfile._id } })
                await currentProfile.updateOne({ $pull: { followings: profile._id } })
                // res.status(200).json("user has been unfollowed");
                res.locals.data.profile = currentProfile
                next()
            } else {
                res.status(403).json("You don't follow this user")
            }
        } catch (error) {
            // console.log(req.body)
            res.status(500).json({ msg: error.messgae })
        }
    } else {
        res.status(403).json("You can't unfollow yourself, stay bitter")
    }
}


const getFollowers = async (req, res, next) => {

    try {
        const profile = await Profile.findById(req.user.profile)
        const followers = profile.followers
        console.log(followers)
        res.locals.data.followers = followers
        next()
    } catch (error) {
        res.status(500).json("You dont have any followers")
    }
}

const getFollowings = async (req, res, next) => {

    try {
        const profile = await Profile.findById(req.user.profile)
        const followings = profile.followings
        res.locals.data.followings = followings
        next()
    } catch (error) {
        res.status(500).json("You don't follow anyone")
    }
}

//get profile of a randon user 
const getRandomProfile = async (req, res, next) => {
    try {
        const foundProfile = await Profile.findById(req.params.randomId).populate("tweets").exec()
        res.locals.data.profile = foundProfile
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//UPDATE
const updateProfile = async (req, res, next) => {
    try {

        const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log(req.body)
        res.locals.data.profile = updatedProfile
        console.log(res.locals.data.profile)
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}



const getUserTweets = async (req, res, next) => {
    console.log(res.locals.data.profile)
    try {

        const profile = await Profile.findById(req.user.profile).populate('tweets').sort('tweets.createdAt').exec()
        // console.log("User profile: ", profile)
        const tweets = profile.tweets
        // console.log("User tweets: ", tweets)
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

const respondWithProfiles = (req, res) => {
    res.json(res.locals.data.profiles)
}

const respondWithTweets = (req, res) => {
    res.json(res.locals.data.tweets)
}

const respondWithFollowers = (req, res) => {
    res.json(res.locals.data.followers)
}

const respondWithFollowings = (req, res) => {
    res.json(res.locals.data.followings)
}

module.exports = {
    getProfile,
    getAllProfiles,
    // destroyProfile,
    updateProfile,
    // createProfile,
    getFollowers,
    getFollowings,
    getUserTweets,
    getRandomProfile,
    followProfile,
    unfollowProfile,
    respondWithProfile,
    respondWithProfiles,
    respondWithTweets,
    respondWithFollowers,
    respondWithFollowings
}