const tweet = require("./tweet");

const Schema = require("mongoose").Schema;

const tweetSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    text: { type: String, required: true },
    likes: { type: Array, default: [] },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

module.exports = tweetSchema;
