import CommentsItem from "./CommentsItem"

const CommentsList = ({ comments, setDeleteModal })=> {
    if (comments.length > 0) {
        return(
            <div className="list">
                {comments.map((comment, index) => {
                    return <CommentsItem key={comment.username + index} comment={comment} setDeleteModal={setDeleteModal} />
                })}
            </div>
        )
    } else {
        return(
            <div className="noComments">
                <span>Todavía no hay<br/>comentarios</span>
                <span>¡Agrega el primero!</span>
            </div>
        )
    }
}

export default CommentsList