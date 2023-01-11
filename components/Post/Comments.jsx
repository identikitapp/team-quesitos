import { useState } from "react"
import CommentsDeleteModal from "./CommentsDeleteModal"
import CommentsForm from "./CommentsForm"
import CommentsList from "./CommentsList"
import Image from "next/image"
import arrowImg from "../../public/arrow.png"

const Comments = ({ comments, seeComments, onSeeCommentsHandler }) => {

    const [deleteModal, setDeleteModal] = useState(false)

    const onDeleteCommentHandler = ()=> {
        // Logica
        setDeleteModal(false)
    }

    if (seeComments) return(
        <div className="comments">
            <div className="nav">
                <Image onClick={()=> onSeeCommentsHandler(false)} width={30} height={30} src={arrowImg} alt="Atras" />
                <span>Comentarios</span>
            </div>
            <CommentsDeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} onDeleteCommentHandler={onDeleteCommentHandler} />
            <CommentsList comments={comments} setDeleteModal={setDeleteModal} />
            <CommentsForm />
        </div>
    )
}

export default Comments