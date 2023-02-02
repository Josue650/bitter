const comment = require('./comment')

const Schema = require('mongoose').Schema

const commentSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  text: { type: String, required: true },
  likes: { type: Array, default: [] },
})

module.exports = commentSchema