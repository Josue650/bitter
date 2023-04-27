import React, { useState, useEffect } from "react";
import './UserPost.css'
import { Avatar } from "@mui/material";
import { Add, Comment, CommentOutlined, CommentRounded, DeleteOutline, Edit, EditOutlined, EditTwoTone, Verified } from "@mui/icons-material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import CommentList from "../components/commentList/CommentList";
import CommentForm from "../components/commentForm/CommentForm";



function UserPost({
    verified,
    tweet,
    tweetId,
    user,
    editTweet,
    deleteTweet,
    createComment,
    setComment,
    comment,
    setIsLiked,
    isLiked, 
    username
}) {


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

    console.log('tweets', tweet)

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
                                {username}
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
                <FavoriteBorder fontSize="small" onClick={() => likeHandler(tweetId)} />
                {/* FIX TWEET LIKES */}
                <h6>{tweet.likes.length}</h6>
                <DeleteOutline fontSize="small" onClick={() => deleteTweet(tweetId)} />
            </div>
            <div>
                {toggle === true ?
                    <CommentList
                        tweet={tweet}
                        username={username} />
                    :
                    ''}

                {toggle === true ?
                    (<CommentForm
                        createComment={createComment}
                        setComment={setComment}
                        comment={comment}
                        tweetId={tweetId}
                        userId={tweet.userId}
                        username={username}
                    />) : ''}
            </div>
            <div>

            </div>
        </>
    )
}

export default UserPost



// import React, { useState } from "react";
// import { Avatar } from "@mui/material";
// import { Add, Comment, CommentOutlined, CommentRounded, DeleteOutline, Edit, EditOutlined, EditTwoTone, Verified } from "@mui/icons-material";
// import { ChatBubbleOutline } from "@mui/icons-material";
// import { Repeat } from "@mui/icons-material";
// import { FavoriteBorder } from "@mui/icons-material";
// import CommentForm from "../components/commentForm/CommentForm";
// import CommentList from "../components/commentList/CommentList";

// function UserPost({
//     tweet,
//     tweetId,
//     user,
//     editTweet,
//     deleteTweet,
//     createComment,
//     setComment,
//     comment,
//     editComment,
//     deleteComment,
//     followProfile,
//     username
// }) {

    


//     return (
//         <>
//             <div className="post">
//                 <div className="post__avatar">
//                     <Avatar src="https://mystickermania.com/cdn/stickers/90-512x512.png" />
//                 </div>
//                 <div className="post__body">
//                     <div className="post__header">
//                         <div className="post__headerText">
//                             <h3>
//                                 {username}
//                                 <span className="post__headerSpecial">
//                                     <Verified className="post__badge"></Verified>
//                                 </span>
//                             </h3>
//                         </div>
//                         <div className="post__headerDescripton">
//                             <p>{tweet.text}</p>
//                         </div>
//                     </div>
//                     {/* <img src="https://media.tenor.com/TC9xkKYp6wIAAAAd/goat.gif" alt="goat"></img> */}
//                 </div>
//                 <div>
//                 </div>

//             </div>
//             <div className="post__footer">
//                 <CommentOutlined fontSize='small' onClick={() => setToggle(!toggle)} />
//                 <EditOutlined fontSize="small" onClick={() => editTweet(tweetId)} />
//                 <Repeat fontSize="small" />
//                 <FavoriteBorder fontSize="small" onClick={() => } />
//                 <DeleteOutline fontSize="small" onClick={() => deleteTweet(tweetId)} />
//             </div>
//             <div>
//                 {toggle === true ?
//                     <CommentList
//                         tweet={tweet}
//                         username={username} />
//                     :
//                     ''}

//                 {toggle === true ?
//                     (<CommentForm
//                         createComment={createComment}
//                         setComment={setComment}
//                         comment={comment}
//                         tweetId={tweetId}
//                         userId={user._id}
//                         username={user.username}
//                     />) : ''}
//             </div>
//             <div>

//             </div>
//         </>
//     )
// }

// export default UserPost