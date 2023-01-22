const express = require('express')
const router = express.Router()
const profile = require('../../controller/api/profile')


// router.delete('/:id', profile.destroyProfile, profile.respondWithProfile)
router.put('/:id', profile.updateProfile, profile.respondWithProfile)
router.post('/', profile.createProfile, profile.respondWithProfile)
router.get('/tweets', profile.getUserTweets, profile.respondWithTweets)
router.get('/', profile.getProfile, profile.respondWithProfile)

module.exports = router