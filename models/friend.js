const mongoose = require('mongoose')

const friendSchema = require('./friendSchema')

module.exports = mongoose.model('Friend', friendSchema)