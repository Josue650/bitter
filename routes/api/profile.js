const express = require('express')
const router = express.Router()
const profile = require('../../controller/api/profile')


// router.delete('/:id', profile.destroyProfile, profile.respondWithProfile)
router.put('/:id', profile.updateProfile, profile.respondWithProfile)
router.put('/:followerId/follow', profile.followProfile, profile.respondWithProfile)
router.get('/:followerId/profile', profile.getFollowersProfile, profile.respondWithProfile)
router.put('/:followerId/unfollow', profile.unfollowProfile, profile.respondWithProfile)
router.get('/tweets', profile.getUserTweets, profile.respondWithTweets)
router.get('/', profile.getProfile, profile.respondWithProfile)

module.exports = router