const tweet = require('./tweet')

const Schema = require('mongoose').Schema

const tweetSchema = new Schema({
  username: { type: String, required: true },
  text: { type: String, required: true},
  likes: { type: Number, default: 0 },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  like: { type: Boolean, default: false },
}, {
  timestamps: true
})

module.exports = tweetSchema