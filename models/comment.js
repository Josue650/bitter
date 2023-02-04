const mongoose = require('mongoose')

const commentSchema = require('./commentSchema')

module.exports = mongoose.model('Comment', commentSchema)