const express = require('express')
const router = express.Router()
const commentCon = require('../../controller/api/comments')

//localhost:3001/comments/:tweetId
router.get('/:tweetId', commentCon.getAllComments, commentCon.respondWithComments )
//localhost:3001/comments/:tweetId/:id
router.delete('/:tweetId/:id', commentCon.destroyComment, commentCon.respondWithComment)
//localhost:3001/comments/:tweetId/:id
router.put('/:tweetId/:id', commentCon.updateComment, commentCon.respondWithComment)
//localhost:3001/comments/:tweetId/:id
router.get('/:tweetId/:id', commentCon.getOneComment, commentCon.respondWithComment)
//localhost:3001/comments/:tweetId
router.post('/:tweetId/', commentCon.createComment, commentCon.respondWithComment)
//localhost:3001/api/comments/:tweetId/:id/like
router.get('/:tweetId/:id/like', commentCon.updateLikes)


module.exports = router