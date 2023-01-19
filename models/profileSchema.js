const profile = require('./profile')

const Schema = require('mongoose').Schema

const profileSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true },
  name: { type: String, required: true},
  location: { type: String, required: true },
  interests: { type: String, required: true },
  photo: { type: String },
  post: { type: String, required: true },

})

module.exports = profileSchema