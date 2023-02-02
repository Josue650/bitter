import CommentForm from "../../components/commentForm/CommentForm"

export default function CommentList({
    comment,
    comments,
    createComment,
    setComment,
    getAllComments,
    id,
    tweet,
    deleteComment,
    editComment
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
                        <button onClick={() => deleteComment(id, item._id)}>Delete</button>
                        <button onClick={() => editComment(id, item._id)}>Edit</button>
                    </li>
                )) : <> Be the first to comment</>}
            </ul>
        </>
    )
}