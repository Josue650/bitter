import React from "react";
import Post from "../Post/Post";
import './Feed.css';
// import TweetList from "../tweetList/TweetList";
// import TweetForm from "../tweetForm/TweetForm";

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* <TweetForm />
            <TweetList /> */}

            <Post />
            <Post />
            <Post />
            {/* Post */ }
            {/* Post */ }
            {/* Post */ }
            {/* Post */ }
            {/* Post */ }
        </div>
    )
}

export default Feed