import React from "react";
import Post from "../Post/Post";
import './Feed.css';
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
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetForm
                createTweet={createTweet}
                setTweet={setTweet}
                tweet={tweet}
            />
            <div className="tC">
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
                            />
                            {/* <button onClick={() => deleteTweet(item._id)}>Delete</button>
                        <button onClick={() => editTweet(item._id)}>Edit</button> */}
                            {/* <CommentList
                            tweet={item}
                            comment={comment}
                            createComment={createComment}
                            setComment={setComment}
                            getAllComments={getAllComments}
                            id={item._id}
                            deleteComment={deleteComment}
                            editComment={editComment}
                        /> */}
                        </li>
                    )) : <> No Tweet Added</>}
                </ul>
            </div>
        </div>
    )
}

export default Feed