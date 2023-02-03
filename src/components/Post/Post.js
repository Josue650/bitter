import React, { useState } from "react";
import './Post.css';
import { Avatar } from "@mui/material";
import { Add, Comment, CommentOutlined, CommentRounded, DeleteOutline, Edit, EditOutlined, EditTwoTone, Verified } from "@mui/icons-material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import CommentList from "../../components/commentList/CommentList"
import CommentForm from "../commentForm/CommentForm";


function Post({
    // displayName,
    // username,
    // verified,
    // image,
    // avatar,
    // profile,
    // user,
    // text,
    // deleteTweet,
    // id,
    // comment,
    // tweet,
    // setComment,
    // createComment,
    // getAllComments,
    // deleteComment,
    // editComment,
    // comments,
    // tweets,
    // editTweet,
    // currentUser
    tweet,
    tweetId,
    user,
    editTweet,
    deleteTweet,
    createComment,
    setComment,
    comment,
    editComment,
    deleteComment,
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
                            <p>{tweet.text}</p>
                        </div>
                    </div>
                    {/* <img src="https://media.tenor.com/TC9xkKYp6wIAAAAd/goat.gif" alt="goat"></img> */}
                </div>
                <div>
                </div>

            </div>
            <div className="post__footer">
                <CommentOutlined fontSize='small' onClick={() => setToggle(!toggle)} />
                <EditOutlined fontSize="small" onClick={() => editTweet(tweetId)} />
                <Repeat fontSize="small" />
                <FavoriteBorder fontSize="small" />
                <DeleteOutline fontSize="small" onClick={() => deleteTweet(tweetId)} />
            </div>
            <div>
                {toggle === true ?
                    (<CommentForm
                        createComment={createComment}
                        setComment={setComment}
                        comment={comment}
                        tweetId={tweetId}
                        userId={user._id}
                    />) : ''}
                <CommentList
                    tweet={tweet} />

            </div>
            <div>

            </div>
        </>
    )
}

export default Post