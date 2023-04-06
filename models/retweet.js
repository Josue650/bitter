const mongoose = require('mongoose')

const retweetSchema = require('./retweetSchema')

module.exports = mongoose.model('Retweet', retweetSchema)