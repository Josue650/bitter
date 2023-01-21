const express = require('express')
const router = express.Router()
const tweets = require('../../controller/api/tweets')

router.get('/', tweets.getAllTweets, tweets.respondWithTweets )
router.delete('/:id', tweets.destroyTweet, tweets.respondWithTweet)
router.put('/:id', tweets.updateTweet, tweets.respondWithTweet)
router.post('/', tweets.createTweet, tweets.respondWithTweet)
// router.get('/:id', commentCon.show, commentCon.respondWithComment)

module.exports = router