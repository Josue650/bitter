const express = require('express')
const router = express.Router()
const commentCon = require('../../controller/api/comments')

//localhost:3001/comments/:tweetId
router.get('/:tweetId', commentCon.getAllComments, commentCon.respondWithComments )
//localhost:3001/comments/:tweetId/:id
router.delete('/:tweetId/:id', commentCon.destroyComment, commentCon.respondWithComment)
//localhost:3001/comments/:tweetId/:id
router.put('/:tweetId/:id', commentCon.updateComment, commentCon.respondWithComment)
//localhost:3001/comments/:tweetId
router.post('/:tweetId/', commentCon.createComment, commentCon.respondWithComment)


module.exports = router