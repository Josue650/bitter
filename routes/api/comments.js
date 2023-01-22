const express = require('express')
const router = express.Router()
const commentCon = require('../../controller/api/comments')

router.get('/:tweetId', commentCon.getAllComments, commentCon.respondWithComments )
router.delete('/:tweetId/:id', commentCon.destroyComment, commentCon.respondWithComment)
router.put('/:tweetId/:id', commentCon.updateComment, commentCon.respondWithComment)
router.post('/:tweetId/', commentCon.createComment, commentCon.respondWithComment)
// router.get('/:id', commentCon.show, commentCon.respondWithComment)

module.exports = router