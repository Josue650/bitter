
import TweetForm from "../../components/tweetForm/TweetForm";
import CommentForm from "../../components/commentForm/CommentForm";
import TweetList from "../../components/tweetList/TweetList";

export default function Homepage({
    user,
    createTweet,
    setTweets,
    tweet,
    getAllTweets,
    tweets,
    setTweet,
    deleteTweet,
    createComment,
    comments,
    setComment,
    comment,
    getAllComments
}) {


    return (
        <>
            {/* <Sidebar/>  */}
            <div className="tweetForm-container">
                <h1>Home</h1>

                <button>Update Profile</button>
                <TweetList
                    user={user}
                    createTweet={createTweet}
                    setTweet={setTweet}
                    tweet={tweet}
                    deleteTweet={deleteTweet}
                    getAllTweet={getAllTweets}
                    tweets={tweets}
                    comment={comment}
                    comments={comments}
                    createComment={createComment}
                    setComment={setComment}
                    getAllComments={getAllComments}
                />
            </div>
        </>
    );
}
