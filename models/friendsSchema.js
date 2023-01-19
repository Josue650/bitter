const post = require('./post')

const Schema = require('mongoose').Schema

const postSchema = new Schema({
  username: { type: String, required: true },
  photo: { type: String },
  post: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
})

module.exports = postSchema