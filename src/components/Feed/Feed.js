import React from "react";
import Post from "../Post/Post";
import './Feed.css';
import TweetList from "../tweetList/TweetList";
import TweetForm from "../tweetForm/TweetForm";

function Feed({
    profile,
    user,
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
    comments }) {

    console.log(tweets)

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetForm
                createTweet={createTweet}
                setTweet={setTweet}
                tweet={tweet}
            />
            <div>
                <ul className="tweetsContainer">
                    {tweets.length ? tweets.map((item) => (
                        <li key={item._id}>
                            <Post
                                text={item.text}
                                user={user}
                                deleteTweet={deleteTweet}
                                id={item._id}
                                comment={comment}
                                tweet={tweet}
                                setComment={setComment}
                                createComment={createComment}
                                comments={comments}
                                getAllComments={getAllComments}
                                deleteComment={deleteComment}
                                editComment={editComment}
                                tweets={tweets}
                            />
                        </li>
                    )) : <> No Tweet Added</>}
                </ul>
            </div>
        </div>
    )
}

export default Feed