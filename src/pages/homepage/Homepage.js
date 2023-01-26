
import TweetForm from "../../components/tweetForm/TweetForm";

export default function Homepage({ user, createTweet, setTweets, tweet, getAllTweets, tweets, setTweet, deleteTweet }) {
    return (
        <>
            {/* <Sidebar/>  */}
            <div className="tweetForm-container">
                <h1>Home</h1>
                <TweetForm
                    user={user}
                    createTweet={createTweet}
                    setTweet={setTweet}
                    tweet={tweet}
                    deleteTweet={deleteTweet}
                />
                <ul>
                    {tweets.length ? tweets.map(item => (
                        <li key={item._id}>
                            <h1>{item.text}</h1>
                            <button onClick={() => deleteTweet(item._id)}>Delete</button>
                        </li>
                    )) : <> No Tweet Added</>}
                </ul>
            </div>
        </>
    );
}
