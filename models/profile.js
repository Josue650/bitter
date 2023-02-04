const mongoose = require('mongoose')

const profileSchema = require('./profileSchema')

module.exports = mongoose.model('Profile', profileSchema)