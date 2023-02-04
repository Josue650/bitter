import "./TweetForm.css";
import { Avatar } from "@mui/material";
export default function TweetForm({
    createTweet,
    setTweet,
    tweet,
    userId,
    username
}) {
    return (
        // <form
        //     onSubmit={(e) => {
        //         e.preventDefault();
        //         createTweet();
        //     }}
        //     className="form-container"
        // >
        //     <div className="flex">
        //         <div>
        //             <div className="img-container">
        //                 <img
        //                     src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmedium%2F000%2F022%2F138%2Fhighresrollsafe.jpg"
        //                     alt=""
        //                 />
        //             </div>
        //         </div>
        //         <div className="textArea-container">
        //             <textarea
        //                 value={tweet.text}
        //                 onChange={(e) => setTweet({ ...tweet, text: e.target.value })}
        //                 placeholder={"What's happening?"}
        //             />
        //         </div>
        //         <div>
        //             <button className="tweetButton">Bleep</button>
        //         </div>
        //     </div>
        // </form>

        <div className="tweetBox">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createTweet(userId, username);
                }}
            >

                <div className="tweetBox__input">
                    <Avatar
                        src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmedium%2F000%2F022%2F138%2Fhighresrollsafe.jpg"
                        alt=""
                    />
                    <input
                        value={tweet.text}
                        onChange={(e) => setTweet({ ...tweet, username: username, text: e.target.value })}
                        placeholder={"What's happening?"}
                    />
                </div>
                <button className="tweetButton">Bleep</button>
            </form>
        </div>
    )
}
