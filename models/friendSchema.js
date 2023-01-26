const friend = require('./friend')

const Schema = require('mongoose').Schema

const friendSchema = new Schema({
  username: { type: String, required: true },
  photo: { type: String },
  tweets: [{ type: Schema.Types.ObjectId, ref: 'Tweets' }],
})

module.exports = friendSchema