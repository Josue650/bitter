import React from "react";


export default function Feed() {
    return (
        <div>
            <p className='font-bold pl-2 my-2'>Username</p>
            <form className="border-b-2 pb-6">
                <textarea
                    type='text'
                    placeholder='what/s happening'
                    maxLength={280}
                    className="bg-slate-200 rounded-lg w-full p-2">
                </textarea>
                <button className='bg-blue-500 text-white py-2 px-4 rounded-full ml-auto'>Bleep</button>
            </form>
            Main Tweet
        </div>
    )
}
// import Post from "../Post/Post";
// import TweetForm from "../tweetForm/TweetForm";
// import { useState } from 'react'

// function Feed({
//     tweet,
//     tweets,
//     createTweet,
//     setTweet,
//     deleteTweet,
//     comment,
//     setComment,
//     createComment,
//     deleteComment,
//     editComment,
//     editTweet,
//     user,
//     followProfile,
//     setFollowersProfile,
//     followersProfile,
//     likes,
//     setLikes,
//     setIsLiked,
//     isLiked,
//     currentProfile
// }) {

//     const [userId, setUserId] = useState(null)

//     return (
//         <div className="feed">
//             <div className="feed__header">
//                 <h2>Home</h2>
//             </div>
//             <TweetForm
//                 currentProfile={currentProfile}
//                 createTweet={createTweet}
//                 setTweet={setTweet}
//                 tweet={tweet}
//                 userId={user._id}
//                 username={user.username}
//             />
//             <div className="tC">
//                 <ul className="tweetsContainer">
//                     {tweets.length ? tweets.map((tweet) => (
//                         <li key={tweet._id}>
//                             <Post
//                                 userId={tweet.userId}
//                                 user={user}
//                                 tweet={tweet}
//                                 tweetId={tweet._id}
//                                 editTweet={editTweet}
//                                 deleteTweet={deleteTweet}
//                                 createComment={createComment}
//                                 setComment={setComment}
//                                 comment={comment}
//                                 editComment={editComment}
//                                 deleteComment={deleteComment}
//                                 username={user.username}
//                                 followProfile={followProfile}
//                                 setFollowersProfile={setFollowersProfile}
//                                 followersProfile={followersProfile}
//                                 setIsLiked={setIsLiked}
//                                 isLiked={isLiked}
//                                 currentProfile={currentProfile}
//                             />
//                         </li>
//                     )) : <> No Tweet Added</>}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Feed