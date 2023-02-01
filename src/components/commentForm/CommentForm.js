export default function CommentForm(
    { comment,
        tweet,
        setComment,
        createComment,
        id }) {
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createComment(id)
                }}>
                <div>
                    <textarea
                        value={comment.text}
                        onChange={(e) => setComment({ ...comment, text: e.target.value })}
                        placeholder={"Comment"}
                    />
                    <button>Bleep</button>
                </div>
            </form>
        </div>
    )
}

