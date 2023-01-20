require('dotenv').config()
const Users = require('../../models/users')


//DELETE
const destroyUsers = async (req, res, next) => {
    try {
        const deletedUsers = await Users.findByIdAndDelete(req.params.id)
        res.locals.data.users = deletedUsers
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//UPDATE
const updateUsers = async (req, res, next) => {
    try {
        const updatedUsers = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.users = updatedUsers
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//CREATE
const createUsers = async (req, res, next) => {
    try {
        const createdUsers = await Users.create(req.body)
        const user = await User.findOne({ email: res.locals.data.email })
        user.users.addToSet(createdUsers)
        await user.save()
        res.locals.data.Users = createdUsers
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//RESPOND
const respondWithUsers = (req, res) => {
    res.json(res.locals.data.users)
}

module.exports = {
    destroyUsers,
    updateUsers,
    createUsers,
    respondWithUsers
}