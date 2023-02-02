const { model, Schema} = require('mongoose')

const followingSchema = new Schema({
  
  profile: {type: Schema.Types.ObjectId, ref:"Profile"}

})

const Following = model("Following", followingSchema)

module.exports = Following