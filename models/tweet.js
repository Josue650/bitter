const mongoose = require('mongoose')

const tweetSchema = require('./tweetSchema')

module.exports = mongoose.model('Tweet', tweetSchema)