const mongoose = require('mongoose')

const friendsSchema = require('./friendsSchema')

module.exports = mongoose.model('Friends', friendsSchema)