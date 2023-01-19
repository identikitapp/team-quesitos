import { useState } from "react"
import Image from "next/image"
import uploadImg from "../../public/upload.png"

const NewPost = () => {
	
	const [length, setLength] = useState(0) 

	return (
		<form className="newPostForm">
			<textarea onChange={(ev)=> setLength(ev.target.value.length)} name="content" cols="120" rows="6" maxLength={200} placeholder="¿Qué estas pensando?"/>
			<div>
				<span>{length}/200</span>
				<Image width='26' height='26' src={uploadImg} alt='Subir imagen' />
				<button type="submit">Publicar</button>
			</div>
		</form>
	)
}

export default NewPost