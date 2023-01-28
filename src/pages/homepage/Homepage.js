
import TweetList from "../../components/tweetList/TweetList";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Widgets from "../../components/Widgets/Widgets";


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
            <div className="tweetForm-container">
                <h1>Home</h1>
                <Sidebar />

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
                <Feed />
                <Widgets />
            </div>
        </>
    );
}
