const friends = require('./friends')

const Schema = require('mongoose').Schema

const friendsSchema = new Schema({
  username: { type: String, required: true },
  photo: { type: String },
  post: [{ type: Schema.Types.ObjectId, ref: 'Friends' }],
})

module.exports = friendsSchema