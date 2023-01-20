const express = require('express')
const router = express.Router()
const profile = require('../../controller/api/profile')

// router.get('/', commentCon.getAllComments, commentCon.respondWithComments )
router.delete('/:id', profile.destroyProfile, profile.respondWithProfile)
router.put('/:id', profile.updateProfile), profile.respondWithProfile
router.post('/', profile.createProfile, profile.respondWithProfile)
// router.get('/:id', commentCon.show, commentCon.respondWithComment)

module.exports = router