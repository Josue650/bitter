const express = require('express')
const router = express.Router()
const tweets = require('../../controller/api/tweets')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const checkToken = require('../../config/checkToken')

router.get('/', checkToken, ensureLoggedIn, tweets.getAllTweets, tweets.respondWithTweets )
router.delete('/:id', checkToken, ensureLoggedIn, tweets.destroyTweet, tweets.respondWithTweet)
router.put('/:id', checkToken, ensureLoggedIn, tweets.updateTweet, tweets.respondWithTweet)
router.post('/', checkToken, ensureLoggedIn, tweets.createTweet, tweets.respondWithTweet)
// router.get('/:id', commentCon.show, commentCon.respondWithComment)

module.exports = router