const mongoose = require('mongoose')

const tweetsSchema = require('./tweetsSchema')

module.exports = mongoose.model('Tweets', tweetsSchema)