import TweetForm from "../tweetForm/TweetForm";
import CommentList from "../commentList/CommentList";

export default function TweetList({
    user,
    createTweet,
    setTweet,
    tweet,
    deleteTweet,
    getAllTweet,
    tweets,
    comment,
    comments,
    createComment,
    setComment,
    getAllComments }) {
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
                        <CommentList
                            tweet={item}
                            comment={comment}
                            // comments={comments}
                            createComment={createComment}
                            setComment={setComment}
                            getAllComments={getAllComments}
                            id={item._id} />
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