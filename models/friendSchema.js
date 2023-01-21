const friend = require('./friend')

const Schema = require('mongoose').Schema

const friendSchema = new Schema({
  username: { type: String, required: true },
  photo: { type: String },
  post: [{ type: Schema.Types.ObjectId, ref: 'Friend' }],
})

module.exports = friendSchema