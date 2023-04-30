import UserPost from "../../UserPost/UserPost"


export default function UserFeed({
    userTweets,
    user,
    createTweet,
    editTweet,
    deleteTweet,
    comment,
    setComment,
    createComment,
    deleteComment,
    editComment,
    comments,
    isLiked,
    setIsLiked,
    userProfile
}) {
    return (
        <div className="feed">
            <ul className="tweetsContainer">
                {userTweets.length ? userTweets.map((tweet) => (
                    <li key={tweet._id}>
                        <UserPost
                            username={tweet.username}
                            tweet={tweet}
                            editTweet={editTweet}
                            deleteTweet={deleteTweet}
                            editComment={editComment}
                            tweetId={tweet._id}
                            user={user}
                            comment={tweet.comments}
                            setComment={setComment}
                            createComment={createComment}
                            isLiked={isLiked}
                            setIsLiked={setIsLiked}
                            userProfile={userProfile}
                        />
                    </li>
                )) : <> No Tweet Added</>}
            </ul>
        </div>
    )
}