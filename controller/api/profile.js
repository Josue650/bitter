//needs work. Error message reads cannot define profile when creating profile


require('dotenv').config()
const Profile = require('../../models/profile')
const User = require("../../models/user")

const getProfile = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: res.locals.data.email }).populate("profile").exec()
        const foundProfile = user.profile
        
        res.locals.data.profile = foundProfile
        console.log(res.locals.data.profile)
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//Follow profile
const followProfile = async (req, res, next) => {
    const user = await User.findOne({ email: res.locals.data.email }).populate("profile").exec()
    const currentProfile = user.profile
    console.log(currentProfile)
    if(currentProfile.id !== req.params.followerId) {
        try {
            const profile = await Profile.findById(req.params.followerId)
            if(!profile.followers.includes(currentProfile._id)){
                await profile.updateOne({$push: {followers: currentProfile._id}})
                await currentProfile.updateOne({$push: {followings: req.params.followerId}})
                res.status(200).json("user has been followed");
                next()
            } else {
                res.status(403).json("You already follow this user's profile")
            }
        } catch(error){
            console.log(req.body)
            res.status(500).json({msg: error.messgae})
        }
    } else {
        res.status(403).json("You can't follow yourself, you bitter betty")
    }
}

//Follow profile
const unfollowProfile = async (req, res, next) => {
    const user = await User.findOne({ email: res.locals.data.email }).populate("profile").exec()
    const currentProfile = user.profile
    if(currentProfile.id !== req.params.followerId) {
        try {
            const profile = await Profile.findById(req.params.followerId)
            if(profile.followers.includes(currentProfile._id)){
                await profile.updateOne({$pull: {followers: currentProfile._id}})
                await currentProfile.updateOne({$pull: {followings: req.params.followerId}})
                res.status(200).json("user has been unfollowed");
                next()
            } else {
                res.status(403).json("You don't follow this user")
            }
        } catch(error){
            console.log(req.body)
            res.status(500).json({msg: error.messgae})
        }
    } else {
        res.status(403).json("You can't unfollow yourself, stay bitter")
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
    // createProfile,
    getUserTweets,
    followProfile,
    unfollowProfile,
    respondWithProfile,
    respondWithTweets
}