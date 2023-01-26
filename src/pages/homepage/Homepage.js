import { useState } from "react";
import TweetForm from "../../components/tweetForm/TweetForm";

export default function Homepage({ user, createTweet, setTweet, tweet }) {
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
                />
            </div>
        </>
    );
}
