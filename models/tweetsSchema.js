const tweets = require('./tweets')

const Schema = require('mongoose').Schema

const tweetsSchema = new Schema({
  username: { type: String, required: true },
  text: { type: String, required: true},
  likes: { type: Number, default: 0 },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  like: { type: Boolean, default: false },
}, {
  timestamps: true
})

module.exports = tweetsSchema