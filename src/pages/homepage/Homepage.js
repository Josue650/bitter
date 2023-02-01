
import TweetList from "../../components/tweetList/TweetList";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Widgets from "../../components/Widgets/Widgets";


export default function Homepage({
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
            <div className="tweetForm-container">
                <h1>Home</h1>
                <Sidebar />

                <button>Update Profile</button>
                <TweetList
                    user={user}
                    token={token}
                    tweet={tweet}
                    setTweet={setTweet}
                    userTweets={userTweets}
                    setUserTweets={setUserTweets}
                    tweets={tweets}
                    setTweets={setTweets}
                    comments={comments}
                    setComments={setComments}
                    comment={comment}
                    setComment={setComment}
                    profile={profile}
                    setProfile={setProfile}
                    createTweet={createTweet}
                    getAllTweets={getAllTweets}
                    deleteTweet={deleteTweet}
                    editTweet={editTweet}
                    createComment={createComment}
                    getAllComments={getAllComments}
                    deleteComment={deleteComment}
                    editComment={editComment}
                    getUserProfile={getUserProfile}
                    updateUserProfile={updateUserProfile}
                    getAUserTweets={getAUserTweets}
                />
                <Feed />
                <Widgets />
            </div>
        </>
    );
}
