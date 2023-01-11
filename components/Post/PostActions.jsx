import Image from "next/image"
import commentImg from "../../public/comment.png"
import likeFillImg from "../../public/likeFill.png"
import likeImg from "../../public/like.png"

const PostActions = ({ like, setLike, data })=> {
    return(
        <div className="actions">
            <div className="buttons">
                <Image width={26} height={26} onClick={()=> setLike(!like)} src={like ? likeFillImg : likeImg} alt="Me gusta" />
                <Image width={26} height={26} src={commentImg} alt="Hacer comentario" />
            </div>
            {data.likes > 0 && <b className="likes">{data.likes} me gusta</b>}
            <p><b>{data.username}</b> {data.content ? data.content : ''}</p>
            {data.comments.length > 0 && <span className="comments">Ver {data.comments.length === 1 ? '' : 'los'} {data.comments.length === 1 ? data.comments.length + ' comentario' : data.comments.length + ' comentarios'}</span>}
            {data.comments.length < 1 && <span className="comments">No hay comentarios</span>}
        </div>
    )
}

export default PostActions