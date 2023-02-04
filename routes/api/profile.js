const express = require('express')
const router = express.Router()
const profile = require('../../controller/api/profile')


//localhost:3001/api/profile/:id
router.put('/:id', profile.updateProfile, profile.respondWithProfile)
//localhost:3001/api/profile/:followerId/follow
router.put('/:followerId/follow', profile.followProfile, profile.respondWithProfile)
//localhost:3001/api/profile/random/:randomId
router.get('/random/:randomId', profile.getRandomProfile, profile.respondWithProfile)
//localhost:3001/api/profile/:followerId/unfollow
router.put('/:followerId/unfollow', profile.unfollowProfile, profile.respondWithProfile)
//localhost:3001/api/profile/tweets
router.get('/tweets', profile.getUserTweets, profile.respondWithTweets)
//localhost:3001/api/profile/followers
router.get('/followers', profile.getFollowers, profile.respondWithFollowers)
// //localhost:3001/api/profile/followings
// router.get('/followings', profile.getFollowings, profile.respondWithFollowings)
//localhost:3001/api/profile/
router.get('/', profile.getProfile, profile.respondWithProfile)
//localhost:3001/api/profile/all
router.get('/all', profile.getAllProfiles, profile.respondWithProfiles)

module.exports = router