import TweetForm from "../tweetForm/TweetForm";
import CommentList from "../commentList/CommentList";

export default function TweetList({
    user,
    token,
    tweet,
    setTweet,
    userTweets,
    setUserTweets,
    tweets,
    setTweets,
    comments,
    setComments,
    comment,
    setComment,
    profile,
    setProfile,
    createTweet,
    getAllTweets,
    deleteTweet,
    editTweet,
    createComment,
    getAllComments,
    deleteComment,
    editComment,
    getUserProfile,
    updateUserProfile,
    getAUserTweets
}) {
    return (
        <>
            <TweetForm
                createTweet={createTweet}
                setTweet={setTweet}
                tweet={tweet}
            />
            <ul>
                {tweets.length ? tweets.map((item) => (
                    <li key={item._id}>
                        <h1>{item.text}</h1>
                        <button onClick={() => deleteTweet(item._id)}>Delete</button>
                        <button onClick={() => editTweet(item._id)}>Edit</button>
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
        </>
    )
}




// <form
//                             onSubmit={(e) => {
//                                 e.preventDefault();
//                                 createComment(item._id);
//                             }}>
//                             <textarea
//                                 value={comment.text}
//                                 onChange={(e) => setComment({ ...comment, text: e.target.value })}
//                             />
//                             <button type='submit'>add comment</button>
//                             <button>delete comment</button>
//                             <button>edit comment</button>
//                         </form>