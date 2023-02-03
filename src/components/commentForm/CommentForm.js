export default function CommentForm(
    { comment,
        tweet,
        setComment,
        createComment,
        tweetId,
        userId }) {
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createComment(tweetId)
                }}>
                <div>
                    <textarea
                        value={comment.text}
                        onChange={(e) => setComment({ ...comment, userId: userId, text: e.target.value })}
                        placeholder={"Comment"}
                    />
                    <button>Bleep</button>
                </div>
            </form>
        </div>
    )
}
