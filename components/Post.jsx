import { useState } from "react"
import profileImg from "../public/profile.png"
import arrowImg from "../public/arrow.png"
import commentImg from "../public/comment.png"
import likeFillImg from "../public/likeFill.png"
import likeImg from "../public/like.png"
import Image from "next/image"

const Comments = ({ comments, seeComments, onSeeCommentsHandler }) => {

    // Cantidad de caracteres del comentario
    const [commentLength, setCommentLength] = useState(0)
    // Si el comentario tiene mas de 1 caracter, saca la opacidad
    let commentSubmitOpacity = commentLength ? {opacity: '1'} : {opacity: '.6'}

    // Si la seccion de comentarios esta abierta, devuelve esta pantalla
    if (seeComments) return(
        <div className="comments">
            <div className="nav">
                {/* Al hacer click actualiza el estado de "verComentarios", cierra la pantalla */}
                <Image onClick={()=> onSeeCommentsHandler(false)} width={30} height={30} src={arrowImg} alt="Atras" />
                <span>Comentarios</span>
            </div>

            {/* Si existen comentarios, los itera y los muestra en pantalla */}
            {comments.length > 0 && <div className="list">
                {comments.map((comment, index) => {
                    return(
                        <div key={comment.username + index}>
                            {/* Si existe una imagen del usuario la muestra, sino muestra una imagen default */}
                            <Image width={40} height={40} src={comment.image ? comment.image : profileImg} alt={comment.username} />
                            <div>
                                <span>{comment.username}</span>
                                <p>{comment.content}</p>
                            </div>
                        </div>
                    )
                })}
            </div>}

            {/* Si no existen comentarios muestra una pantalla de no comentarios */}
            {comments.length < 1 && <div className="noComments">
                <span>Todavía no hay<br/>comentarios</span>
                <span>¡Agrega el primero!</span>
            </div>}
            
            <form className="comment">
                <Image width={34} height={34} src={profileImg} alt="Nombre de usuario" />
                {/* Al cambiar, actualiza el estado con la cantidad de caracteres del comentario */}
                <input onChange={(ev)=> setCommentLength(ev.target.value.length)} placeholder="Agrega un comentario..." type="text" minLength={1} maxLength={200} required />
                {/* Si tiene 1 caracter o mas, saca la opacidad al boton publicar */}
                <input style={commentSubmitOpacity} type="submit" value="Publicar" />
            </form>
        </div>
    )
}

const Post = ({ data, overflow })=> {

    const [seeComments, setSeeComments] = useState(false)
    const [like, setLike] = useState(false)

    const onSeeCommentsHandler = (value)=> {
        setSeeComments(value)
        if (value) {
            document.body.style.overflowY = 'hidden'
        } else if (!value && overflow) {
            document.body.style.overflowY = 'auto'
        }
    }

    return(
        <div className="postContainer">
            <div className="userInfo">
                <Image width={34} height={34} src={data.userImage ? data.userImage : profileImg} alt={data.username} />
                <h4>{data.username}</h4>
                <span></span>
                <span>{data.date}</span>
            </div>
            <Image placeholder="blur" onDoubleClick={()=> setLike(!like)} className="postImage" src={data.image} alt={data.username} />
            <div className="actions">
                <div className="buttons">
                    <Image width={26} height={26} onClick={()=> setLike(!like)} src={like ? likeFillImg : likeImg} alt="Me gusta" />
                    <Image width={26} height={26} onClick={()=> onSeeCommentsHandler(true)} src={commentImg} alt="Hacer comentario" />
                </div>
                {data.likes > 0 && <b className="likes">{data.likes} me gusta</b>}
                <p><b>{data.username}</b> {data.content ? data.content : ''}</p>
                {data.comments.length > 0 && <span onClick={()=> onSeeCommentsHandler(true)} className="comments">Ver {data.comments.length === 1 ? '' : 'los'} {data.comments.length === 1 ? data.comments.length + ' comentario' : data.comments.length + ' comentarios'}</span>}
                {data.comments.length < 1 && <span className="comments">No hay comentarios</span>}
            </div>
            <Comments comments={data.comments} seeComments={seeComments} onSeeCommentsHandler={onSeeCommentsHandler} />
        </div>
    )
}

export default Post