export default function CommentForm(
    { comment,
        tweet,
        setComment,
        createComment,
        tweetId,
        userId,
        username }) {
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createComment(tweetId, userId, username)
                }}>
                <div>
                    <textarea
                        value={comment.text}
                        onChange={(e) => setComment({ ...comment, username: username, text: e.target.value })}
                        placeholder={"Comment"}
                    />
                    <button>Bleep</button>
                </div>
            </form>
        </div>
    )
}
