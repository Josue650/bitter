const profile = require('./profile')

const Schema = require('mongoose').Schema

const profileSchema = new Schema({
  username: { type: String, unique: true},
  // email: { type: String, required: true },
  dob: { type: String},
  name: { type: String},
  location: { type: String},
  interests: { type: String},
  photo: { type: String },
  tweets: [{type: Schema.Types.ObjectId, ref:"Tweet"}]
}, {
  timestamps: true
})

module.exports = profileSchema