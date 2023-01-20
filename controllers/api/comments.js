require('dotenv').config()
const Comments = require('../../models/comments')

//DELETE
const destroyComment = async (req, res, next) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id)
        res.locals.data.comment = deletedComment
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//UPDATE
const updateComment = async (req, res, next) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.comment = updatedComment
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//CREATE
const createComment = async (req, res, next) => {
    try {
        const createdComment = await Comment.create(req.body)
        const user = await User.findOne({ email: res.locals.data.email })
        user.comments.addToSet(createdComment)
        await user.save()
        res.locals.data.comment = createdComment
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//RESPOND
const respondWithComment = (req, res) => {
    res.json(res.locals.data.comment)
}

module.exports = {
    destroyComment,
    updateComment,
    createComment,
    respondWithComment
}
