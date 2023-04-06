const tweet = require("./tweet");

const Schema = require("mongoose").Schema;

const tweetSchema = new Schema(
  {
    username: { type: String, required: true },
    userId: {
      type: String,
      required: true,
    },
    text: { type: String, required: true },
    likes: { type: Array, default: [] },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    retweets: { type: Array, default: [] }
    // repost: { type: Boolean, default: false }
  },
  {
    timestamps: true,
  }
);

module.exports = tweetSchema;
