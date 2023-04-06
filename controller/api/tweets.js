require("dotenv").config();
const Tweet = require("../../models/tweet");
const Profile = require("../../models/profile");
const Retweet = require("../../models/retweet")
const User = require("../../models/user");


const getAllTweets = async (req, res, next) => {
  try {
    const foundTweets = await Tweet.find({}).populate("comments").exec();
    // console.log("Found Tweets: ", foundTweets)
    res.locals.data.tweets = foundTweets;
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//DELETE
const destroyTweet = async (req, res, next) => {
  const currentProfile = await Profile.findById(req.user.profile)
  console.log(currentProfile)
  if (currentProfile.tweets.includes(req.params.id)) {
    try {
      const deletedTweet = await Tweet.findByIdAndDelete(req.params.id);
      res.locals.data.tweet = deletedTweet;
      next();
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  } else {
    res.status(403).json("You can't delete another's bitterness")
  }

};



//UPDATE
const updateTweet = async (req, res, next) => {
  const currentProfile = await Profile.findById(req.user.profile)
  if (currentProfile.tweets.includes(req.params.id)) {
    try {
      const updatedTweet = await Tweet.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      // res.locals.data.profile = currentProfile.updatedTweet
      res.locals.data.tweet = updatedTweet;
      next();
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  } else {
    res.status(403).json("You can't edit another's bitterness")
  }
};

//CREATE
const createTweet = async (req, res, next) => {
  try {
    const createdTweet = await Tweet.create(req.body);

    try {
      await Profile.findByIdAndUpdate(req.user.profile, { $push: { tweets: createdTweet._id } })
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
    res.locals.data.tweet = createdTweet
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const getOneTweet = async (req, res, next) => {
  try {
    const foundTweet = await Tweet.findById(req.params.id).populate("comments");
    console.log("Found Tweets: ", foundTweet)
    res.locals.data.tweet = foundTweet;
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//like / dislike a tweet
const updateLikes = async (req, res, next) => {
  try {
    const currentTweet = await Tweet.findById(req.params.id)
    const currentRetweet = await Retweet.findById(req.params.id)
    if (currentTweet && !currentRetweet) {
      if (!currentTweet.likes.includes(req.user._id)) {
        await currentTweet.updateOne({ $push: { likes: req.user._id } });
        res.locals.data.tweet = currentTweet
        next()
      } else {
        await currentTweet.updateOne({ $pull: { likes: req.user._id } });
        res.locals.data.tweet = currentTweet
        next()
      }
    } else if (currentRetweet && !currentTweet) {
      if (!currentRetweet.likes.includes(req.user._id)) {
        await currentRetweet.updateOne({ $push: { likes: req.user._id } });
        res.locals.data.retweet = currentRetweet
        next()
      } else {
        await currentRetweet.updateOne({ $pull: { likes: req.user._id } });
        res.locals.data.retweet = currentRetweet
        next()
      }
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//repost tweet
const retweet = async (req, res, next) => {
  try {
    // console.log(req.params)
    const currentTweet = await Tweet.findById(req.params.tweetId)
    if (!currentTweet.retweets.includes(req.user._id)) {
      await currentTweet.updateOne({ $push: { retweets: req.user._id } });
      const createdRetweet = await Retweet.create(req.body);
      createdRetweet.tweet = currentTweet._id
      res.locals.data.retweet = createdRetweet
      try {
        await Profile.findByIdAndUpdate(req.user.profile, { $push: { retweets: createdRetweet._id } })
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
    } else {
      res.status(400).json("You have already retweeted this tweet")
    }
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
  // try {
  //   const currentTweet = await Tweet.findById(req.params.id)
  //   const currentRetweet = await Retweet.findById(req.params.id)
  //   if(!currentTweet.reposts.includes(req.user._id)){
  //     await currentTweet.updateOne({ $push: { reposts: req.user._id }})
  //     try {
  //       await Profile.findByIdAndUpdate(req.user.profile, { $push: { tweets: currentTweet._id } })

  //     } catch (error) {
  //       res.status(400).json({ msg: error.message });
  //     }
  //   }  else {
  //     res.status(400).json("You cannot undo a repost")
  //   }
  //   res.locals.data.tweet = currentTweet
  //   next()
  // } catch (error) {
  //   res.status(400).json({ msg: error.message });
  // }
}





//RESPOND
const respondWithTweets = (req, res) => {
  res.json(res.locals.data.tweets);
};
const respondWithTweet = (req, res) => {
  res.json(res.locals.data.tweet);
};
const respondWithRetweet = (req, res) => {
  res.json(res.locals.data.retweet);
};

module.exports = {
  getAllTweets,
  destroyTweet,
  updateTweet,
  createTweet,
  getOneTweet,
  updateLikes,
  retweet,
  respondWithTweets,
  respondWithTweet,
  respondWithRetweet
};
