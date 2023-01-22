require('dotenv').config()
const Tweet = require('../../models/tweet')
const Profile = require("../../models/profile")

const getAllTweets = async (req, res, next) => {
    try {
        const foundTweets = await Tweet.find({}).populate("comments")
        res.locals.data.tweets = foundTweets
        next()
    } catch(error){
        res.status(400).json({ msg: error.message })
    }
}

//DELETE
const destroyTweet = async (req, res, next) => {
    try {
        const deletedTweet = await Tweet.findByIdAndDelete(req.params.id)
        res.locals.data.tweet = deletedTweet
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//UPDATE
const updateTweet = async (req, res, next) => {
    try {
        const updatedTweet = await Tweet.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.tweet = updatedTweet
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//CREATE
const createTweet = async (req, res, next) => {
    try {
        const createdTweet = await Tweet.create(req.body)
        const profile = await Profile.findOne({ profile: res.locals.data.profile })
        profile.tweets.addToSet(createdTweet)
        await profile.save()
        res.locals.data.tweet = createdTweet
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//RESPOND
const respondWithTweets = (req, res) => {
    res.json(res.locals.data.tweets)
}
const respondWithTweet = (req, res) => {
    res.json(res.locals.data.tweet)
}

module.exports = {
    getAllTweets,
    destroyTweet,
    updateTweet,
    createTweet,
    respondWithTweets,
    respondWithTweet
}