import { useState } from "react"
import profileImg from "../../public/profile.png"
import Image from "next/image"

const CommentsForm = ()=> {
    
    const [commentLength, setCommentLength] = useState(0)
    let commentSubmitOpacity = commentLength ? {opacity: '1'} : {opacity: '.6'}

    return(
        <form className="comment">
            <Image width={34} height={34} src={profileImg} alt="Nombre de usuario" />
            <input onChange={(ev)=> setCommentLength(ev.target.value.length)} placeholder="Agrega un comentario..." type="text" minLength={1} maxLength={200} required />
            <input style={commentSubmitOpacity} type="submit" value="Publicar" />
        </form>
    )
}

export default CommentsForm