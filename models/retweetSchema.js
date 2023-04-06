const retweet = require("./retweet");

const Schema = require("mongoose").Schema;

const retweetSchema = new Schema(
  {
    username: { type: String, required: true },
    userId: {
      type: String,
      required: true,
    },
    // tweetId: type: ,
    tweet: { type: Schema.Types.ObjectId, ref:"Tweet" },
    retweet: { type: Boolean, default: false },
    likes: { type: Array, default: [] },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    retweets: { type: Array, default: [] }
  },
  {
    timestamps: true,
  }
);

module.exports = retweetSchema;