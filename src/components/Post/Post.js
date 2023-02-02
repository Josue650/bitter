import React, { useState } from "react";
import './Post.css';
import { Avatar } from "@mui/material";
import { Comment, Verified } from "@mui/icons-material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import { Publish } from "@mui/icons-material";
import { Delete } from "@mui/icons-material";
import CommentList from "../commentList/CommentList";
import CommentForm from "../commentForm/CommentForm";
import TweetList from "../tweetList/TweetList";

function Post({
    displayName,
    username,
    verified,
    image,
    avatar,
    profile,
    user,
    text,
    deleteTweet,
    id,
    comment,
    tweet,
    setComment,
    createComment,
    getAllComments,
    deleteComment,
    editComment,
    comments,
    tweets
}) {

    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className="post">
                <div className="post__avatar">
                    <Avatar src="https://mystickermania.com/cdn/stickers/90-512x512.png" />
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                {user.username}
                                <span className="post__headerSpecial">
                                    <Verified className="post__badge"></Verified>
                                </span>
                            </h3>
                        </div>
                        <div className="post__headerDescripton">
                            <p>{text}</p>
                        </div>
                    </div>
                    {/* <img src="https://media.tenor.com/TC9xkKYp6wIAAAAd/goat.gif" alt="goat"></img> */}
                </div>

                {toggle === true ?
                    <CommentForm
                        comment={comment}
                        tweet={tweet}
                        setComment={setComment}
                        createComment={createComment}
                        id={id}
                        user={user}
                        deleteTweet={deleteTweet}
                        comments={comments}
                        getAllComments={getAllComments}
                        deleteComment={deleteComment}
                        editComment={editComment}
                    /> : ''}
            </div>
            <div className="post__footer">
                <ChatBubbleOutline fontSize="small" onClick={() => setToggle(!toggle)} />
                <Repeat fontSize="small" />
                <FavoriteBorder fontSize="small" />
                <Delete fontSize="small" onClick={() => deleteTweet(id)} />
            </div>
        </>
    )
}

export default Post