const comment = require('./comment')

const Schema = require('mongoose').Schema

const commentSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  text: { type: String, required: true },
  like: { type: Boolean, default: false },
  likes: { type: Number, default: 0 },
})

module.exports = commentSchema