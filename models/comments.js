const mongoose = require('mongoose')

const commentsSchema = require('./commentsSchema')

module.exports = mongoose.model('Comments', commentsSchema)