const express = require('express')
const router = express.Router()
const tweets = require('../../controller/api/tweets')

router.get('/:profileId', tweets.getAllTweets, tweets.respondWithTweets )
router.delete('/:profileId/:id', tweets.destroyTweet, tweets.respondWithTweet)
router.put('/:profileId/:id', tweets.updateTweet, tweets.respondWithTweet)
router.post('/', tweets.createTweet, tweets.respondWithTweet)
// router.get('/:id', commentCon.show, commentCon.respondWithComment)

module.exports = router