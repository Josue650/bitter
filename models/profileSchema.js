const profile = require('./profile')

const Schema = require('mongoose').Schema

const profileSchema = new Schema({
  // email: { type: String, required: true },
  dob: { type: String},
  name: { type: String},
  location: { type: String},
  interests: { type: String},
  photo: { type: String },
  friends: [{type: Schema.Types.ObjectId, ref: "Friend"}],
  tweets: [{type: Schema.Types.ObjectId, ref:"Tweet"}]
}, {
  timestamps: true
})

module.exports = profileSchema