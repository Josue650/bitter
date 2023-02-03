const express = require('express')
const router = express.Router()
const tweets = require('../../controller/api/tweets')

//localhost:3001/api/tweets
router.get('/', tweets.getAllTweets, tweets.respondWithTweets )
//localhost:3001/api/tweets/:id
router.delete('/:id', tweets.destroyTweet, tweets.respondWithTweet)
//localhost:3001/api/tweets/:id
router.put('/:id', tweets.updateTweet, tweets.respondWithTweet)
//localhost:3001/api/tweets/
router.post('/', tweets.createTweet, tweets.respondWithTweet)
//localhost:3001/api/tweets/:id
router.get('/:id', tweets.getOneTweet, tweets.respondWithTweet)
//localhost:3001/api/tweets/:id/like
router.put('/:id/like', tweets.updateLikes, tweets.respondWithTweet)


module.exports = router