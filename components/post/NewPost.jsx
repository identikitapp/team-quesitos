import { useRef } from "react"
import useNewPost from "../../hooks/useNewPost"
import Loader from "../Loader"
import Image from "next/image"
import uploadImg from "../../public/post/upload.svg"
import profileImg from "../../public/profile.png"
import { useUserContext } from "../../context/user"

const NewPost = ({ update, setUpdate }) => {
	
	const { user } = useUserContext()
	const { error, loader, length, setLength, onSubmitHandler } = useNewPost(update, setUpdate)
	const inputFileRef = useRef()

	const buttonValue = loader ? <Loader width={18} height={18} /> : "Publicar"
	const userImage = user.image ? user.image : profileImg

	return (
		<form onSubmit={(ev)=> onSubmitHandler(ev)} className="newPostForm">
			{error.error && <span className="error">{error.message}</span>}
			<input ref={inputFileRef} style={{display: "none"}} type="file" name="image" accept="image/*" />
			<div className="textarea">
				<textarea onChange={(ev)=> setLength(ev.target.value.length)} name="content" cols="120" rows="6" maxLength={200} placeholder="¿En qué estas pensando?"/>
				<Image width={50} height={50} src={userImage} alt={user.username}></Image>
			</div>
			<div className="buttons">
				<span>{length}/200</span>
				<Image onClick={()=> inputFileRef.current.click()} width='30' height='30' src={uploadImg} alt='Subir image' />
				<button type="submit">{buttonValue}</button>
			</div>
		</form>
	)
}

export default NewPost