require("dotenv").config();
const Tweet = require("../../models/tweet");
const Profile = require("../../models/profile");
const User = require("../../models/user");


const getAllTweets = async (req, res, next) => {
  try {
    const foundTweets = await Tweet.find({}).populate("comments");
    res.locals.data.tweets = foundTweets;
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//DELETE
const destroyTweet = async (req, res, next) => {
  try {
    const deletedTweet = await Tweet.findByIdAndDelete(req.params.id);
    res.locals.data.tweet = deletedTweet;
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//UPDATE
const updateTweet = async (req, res, next) => {
  try {
    const updatedTweet = await Tweet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.locals.data.tweet = updatedTweet;
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//CREATE
const createTweet = async (req, res, next) => {
  try {
    // const newUser = await User.findById(req.user._id)
    // console.log("new User", newUser)
    // console.log("User: ", req.user)
    // console.log("Locals:", res.locals.data)
    const createdTweet = await Tweet.create(req.body);
    
    try {
      await Profile.findByIdAndUpdate(req.user.profile, { $push: {tweets: createdTweet._id} })
      // profile.tweets.addToSet(createdTweet)
      // await profile.save()
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
    res.locals.data.tweet = createdTweet
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// const createTweet = async (req, res, next) => {
//   try {
//     const createdTweet = await Tweet.create(req.body);
//     res.locals.data.tweet = createdTweet
//     try{
//       const profile = await Profile.findByIdAndUpdate(req.params.profileId, { $push: {tweets: createdTweet._id} })
//     // profile.tweets.addToSet(createdTweet)
//     // await profile.save()

//     res.locals.data.profile = profile
//     } catch(error){
//       res.status(400).json({ msg: error.message });
//     }
//     next();
//   } catch (error) {
//     res.status(400).json({ msg: error.message });
//   }
// };

//RESPOND
const respondWithTweets = (req, res) => {
  res.json(res.locals.data.tweets);
};
const respondWithTweet = (req, res) => {
  res.json(res.locals.data.tweet);
};

module.exports = {
  getAllTweets,
  destroyTweet,
  updateTweet,
  createTweet,
  respondWithTweets,
  respondWithTweet,
};
