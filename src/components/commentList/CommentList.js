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
    editComment,
    username
}) {
    return (
        <>
            <ul>
                {tweet.comments.length ? tweet.comments.map((item) => (
                    <li key={item._id}>
                        <h3>{item.username}</h3>
                        <h4>{item.text}</h4>
                        {/* <button onClick={() => deleteComment(id, item._id)}>Delete</button>
                        <button onClick={() => editComment(id, item._id)}>Edit</button> */}
                    </li>
                )) : <> Be the first to comment</>}
            </ul>
        </>
    )
}