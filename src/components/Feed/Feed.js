import React from "react";
import Post from "../Post/Post";
import './Feed.css';

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox*/ }

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