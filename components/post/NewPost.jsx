import { useRef } from "react"
import useNewPost from "../../hooks/useNewPost"
import Loader from "../Loader"
import Image from "next/image"

const user = {
	username: "",
	name: "",
	lastname: "",
	image: ""
}

const NewPost = ({ update, setUpdate }) => {
	
	const { error, loader, length, setLength, onSubmitHandler } = useNewPost(update, setUpdate)
	const inputFileRef = useRef()

	const buttonValue = loader ? <Loader width={18} height={18} /> : "Publicar"
	const userImage = user.image ? user.image : "/assets/profile.png"

	return (
		<form onSubmit={(ev)=> onSubmitHandler(ev)} className="newPostForm">
			<h2>Haz una publicación</h2>
			{error.error && <span className="error">{error.message}</span>}
			<input ref={inputFileRef} style={{display: "none"}} type="file" name="image" accept="image/*" />
			<div className="textarea">
				<textarea onChange={(ev)=> setLength(ev.target.value.length)} name="content" cols="120" rows="6" maxLength={200} placeholder="¿En qué estas pensando?"/>
				<Image width={50} height={50} src={userImage} alt={user.username}></Image>
			</div>
			<div className="buttons">
				<span>{length}/200</span>
				<Image onClick={()=> inputFileRef.current.click()} width='30' height='30' src="/assets/post/upload.svg" alt='Subir image' />
				<button type="submit">{buttonValue}</button>
			</div>
		</form>
	)
}

export default NewPost