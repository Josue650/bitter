require('dotenv').config()
const Comment = require("../../models/comment")
const Profile = require("../../models/profile")
const User = require("../../models/user")
const Tweet = require("../../models/tweet")

//Get All Comments
const getAllComments = async (req, res, next) => {
    try {
        // const foundComments = await Comment.find({})
        const tweet = await Tweet.findById(req.params.tweetId).populate("comments")
        res.locals.data.comments = tweet.comments
        next()
    } catch(error){
        res.status(400).json({ msg: error.message })
    }
}

//Destory Comment
const destroyComment = async (req, res, next) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id)
        res.locals.data.comment = deletedComment
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//Update comment
const updateComment = async (req, res, next) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.comment = updatedComment
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//Create new comment on tweet
const createComment = async (req, res, next) => {
    try {
        const createdComment = await Comment.create(req.body)
        res.locals.data.comment = createdComment
        try{
            const tweet = await Tweet.findByIdAndUpdate(req.params.tweetId, { $push: { comments: createdComment._id}})
            res.locals.data.tweet = tweet
        } catch(error) {
            res.status(400).json({ msg: error.message })
        }
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//RESPOND
const respondWithComment = (req, res) => {
    res.json(res.locals.data.comment)
}
const respondWithComments = (req, res) => {
    res.json(res.locals.data.comments)
}

module.exports = {
    getAllComments,
    destroyComment,
    updateComment,
    createComment,
    respondWithComment,
    respondWithComments 
}
