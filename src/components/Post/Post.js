import React, { useState, useEffect } from "react";
import './Post.css';
import { Avatar } from "@mui/material";
import { Add, Comment, CommentOutlined, CommentRounded, DeleteOutline, Edit, EditOutlined, EditTwoTone, Verified } from "@mui/icons-material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import CommentList from "../../components/commentList/CommentList"
import CommentForm from "../commentForm/CommentForm";
import { useNavigate } from "react-router-dom";


function Post({
    // displayName,
    // username,
    verified,
    // image,
    // avatar,
    // profile
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
    followProfile,
    setIsLiked,
    isLiked
}) {

    console.log(user, 'post user')


    const [like, setLike] = useState(null);
    const [tweets, setTweets] = useState([])
    const [toggle, setToggle] = useState(false)
    const [oneTweet, setOneTweet] = useState(null)


    const likeHandler = (tweetId) => {
        updateLikes(tweetId)
        setLike(isLiked ? like - 1 : like + 1);
    };



    const updateLikes = async (tweetId, updateLike) => {
        try {
            const response = await fetch(`/api/tweets/${tweetId}/like`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                },
                body: JSON.stringify(updateLike)
            })
            const data = await response.json()
            setLike(data)
            setIsLiked(!isLiked)
        } catch (error) {
            console.error(error)
        }
    }

    const getOneTweet = async (tweetId) => {
        try {
            const response = await fetch(`/api/tweets/${tweetId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = await response.json()
            setOneTweet(data)
        } catch (error) {
            console.log(error)
        }
    }

    //     const handleFollow = ayscn() => {
    //         if(!user)
    // }



    return (
        <>
            <div className="post">
                <div className="post__avatar">
                    <Avatar src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmedium%2F000%2F022%2F138%2Fhighresrollsafe.jpg" />
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                @{tweet.username}
                                <span className="post__headerSpecial">
                                    <Verified className="post__badge"></Verified>
                                </span>
                            </h3>
                        </div>
                        {user.username !== tweet.username ?
                            (<button >Follow</button>) : ''}
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
                <FavoriteBorder fontSize="small" onClick={() => likeHandler(tweetId)} />
                <h6>{tweet.likes.length}</h6>
                {user.username === tweet.username ?
                    <DeleteOutline fontSize="small" onClick={() => deleteTweet(tweetId)} /> : ''}

            </div>
            <div>
                {toggle === true ?
                    <CommentList
                        tweet={tweet}
                        username={user.username} />
                    :
                    ''}

                {toggle === true ?
                    (<CommentForm
                        createComment={createComment}
                        setComment={setComment}
                        comment={comment}
                        tweetId={tweetId}
                        userId={user._id}
                        username={user.username}
                    />) : ''}
            </div>
            <div>

            </div>
        </>
    )
}

export default Post