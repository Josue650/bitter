import CommentForm from "../../components/commentForm/CommentForm"

export default function CommentList({
    comment,
    comments,
    createComment,
    setComment,
    getAllComments,
    id,
    tweet
}) {
    return (
        <>
            <CommentForm
                comment={comment}
                comments={comments}
                createComment={createComment}
                setComment={setComment}
                getAllComments={getAllComments}
                id={id}
            />
            <ul>
                {tweet.comments.length ? tweet.comments.map((item) => (
                    <li key={item._id}>
                        <h1>{item.text}</h1>
                        {/* <button onClick={() => deleteComment(item._id)}>Delete</button> */}
                    </li>
                )) : <> Be the first to comment</>}
            </ul>
        </>
    )
}