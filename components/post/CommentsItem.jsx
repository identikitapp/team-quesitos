// import profileImg from "../../public/profile.png"
// import crossImg from "../../public/cross.png"
import Image from "next/image"

const CommentsItem = ({ comment, setDeleteModal })=> {
    return(
        <div>
            <Image width={40} height={40} src={comment.image ? comment.image : profileImg} alt={comment.username} />
            <div>
                <span>{comment.username}</span>
                <p>{comment.content}</p>
            </div>
            <Image onClick={()=> setDeleteModal(true)} className="delete" width={20} height={20} src={crossImg} alt="Eliminar comentario" />
        </div>
    )
}

export default CommentsItem