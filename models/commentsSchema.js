const comments = require('./comments')

const Schema = require('mongoose').Schema

const commentsSchema = new Schema({
  username: { type: String, required: true },
  text: { type: String, required: true},
  like: { type: Boolean, default: false },
  likes: { type: Number, default: 0 },
})

module.exports = commentsSchema