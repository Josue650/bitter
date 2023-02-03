import React from "react";
import Post from "../Post/Post";
import './Feed.css';
import TweetForm from "../tweetForm/TweetForm";
import { Add } from "@mui/icons-material";

function Feed({
    profile,
    tweet,
    tweets,
    createTweet,
    setTweet,
    deleteTweet,
    comment,
    setComment,
    createComment,
    getAllComments,
    deleteComment,
    editComment,
    comments,
    editTweet,
    user,
    currentUser }) {

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetForm
                createTweet={createTweet}
                setTweet={setTweet}
                tweet={tweet}
                userId={user._id}
                username={user.username}
            />
            <div>
                <ul className="tweetsContainer">
                    {tweets.length ? tweets.map((tweet) => (
                        <li key={tweet._id}>
                            <Post
                                user={user}
                                tweet={tweet}
                                tweetId={tweet._id}
                                editTweet={editTweet}
                                deleteTweet={deleteTweet}
                                createComment={createComment}
                                setComment={setComment}
                                comment={comment}
                                editComment={editComment}
                                deleteComment={deleteComment}
                                username={user.username}
                            />
                        </li>
                    )) : <> No Tweet Added</>}
                </ul>
            </div>
        </div>
    )
}

export default Feed