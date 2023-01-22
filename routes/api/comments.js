const express = require('express')
const router = express.Router()
const commentCon = require('../../controller/api/comments')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const checkToken = require('../../config/checkToken')

router.get('/:tweetId', checkToken, ensureLoggedIn, commentCon.getAllComments, commentCon.respondWithComments )
router.delete('/:tweetId/:id', checkToken, ensureLoggedIn, commentCon.destroyComment, commentCon.respondWithComment)
router.put('/:tweetId/:id', checkToken, ensureLoggedIn, commentCon.updateComment, commentCon.respondWithComment)
router.post('/:tweetId/', checkToken, ensureLoggedIn, commentCon.createComment, commentCon.respondWithComment)
// router.get('/:id', commentCon.show, commentCon.respondWithComment)

module.exports = router