//needs work. Error message reads cannot define profile when creating profile


require('dotenv').config()
const Profile = require('../../models/profile')
const User = require("../../models/user")

//DELETE
const destroyProfile = async (req, res, next) => {
    try {
        const deletedProfile = await Profile.findByIdAndDelete(req.params.id)
        res.locals.data.profile = deletedProfile
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//UPDATE
const updateProfile = async (req, res, next) => {
    try {
        const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.profile = updatedProfile
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//CREATE
const createProfile = async (req, res, next) => {
    try {
        const createdProfile = await Profile.create(req.body)
        const user = await User.findOne({ email: res.locals.data.email })
        user.profile.addToSet(createdProfile)
        await user.save()
        res.locals.data.profile = createdProfile
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//RESPOND
const respondWithProfile = (req, res) => {
    res.json(res.locals.data.profile)
}

module.exports = {
    destroyProfile,
    updateProfile,
    createProfile,
    respondWithProfile
}