require('dotenv').config()
const Feeds = require('../../models/feed')

//DELETE
const destroyFeed = async (req, res, next) => {
    try {
        const deletedFeed = await Feed.findByIdAndDelete(req.params.id)
        res.locals.data.feed = deletedFeed
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//UPDATE
const updateFeed = async (req, res, next) => {
    try {
        const updatedFeed = await Feed.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.feed = updatedFeed
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//CREATE
const createFeed = async (req, res, next) => {
    try {
        const createdFeed = await Feed.create(req.body)
        const user = await User.findOne({ email: res.locals.data.email })
        user.feeds.addToSet(createdFeed)
        await user.save()
        res.locals.data.feed = createdFeed
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//RESPOND
const respondWithFeed = (req, res) => {
    res.json(res.locals.data.feed)
}

module.exports = {
    destroyFeed,
    updateFeed,
    createFeed,
    respondWithFeed
}