const friends = require('./friends')

const Schema = require('mongoose').Schema

const friendsSchema = new Schema({
  username: { type: String, required: true },
  photo: { type: String },
  tweets: [{ type: Schema.Types.ObjectId, ref: 'Tweets' }],
})

module.exports = friendsSchema