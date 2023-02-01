const { model, Schema} = require('mongoose')

const followerSchema = new Schema({
  
  profile: {type: Schema.Types.ObjectId, ref:"Profile"}

})

const Follower = model("Follower", followerSchema)

module.exports = Follower