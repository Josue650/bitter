require('dotenv').config()
const Tweets = require('../../models/tweets')


//DELETE
const destroyTweets = async (req, res, next) => {
    try {
        const deletedTweets = await Tweets.findByIdAndDelete(req.params.id)
        res.locals.data.tweets = deletedTweets
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//UPDATE
const updateTweets = async (req, res, next) => {
    try {
        const updatedTweets = await Tweets.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.tweets = updatedTweets
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//CREATE
const createTweets = async (req, res, next) => {
    try {
        const createdTweets = await Tweets.create(req.body)
        const user = await User.findOne({ email: res.locals.data.email })
        user.tweets.addToSet(createdTweets)
        await user.save()
        res.locals.data.tweets = createdTweets
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//RESPOND
const respondWithTweets = (req, res) => {
    res.json(res.locals.data.tweets)
}

module.exports = {
    destroyTweets,
    updateTweets,
    createTweets,
    respondWithTweets
}