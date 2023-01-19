import { useState } from 'react';
import Image from 'next/image';
import likeImg from '../../public/like.png';
import likeFillImg from '../../public/likeFill.png';
import commentImg from '../../public/comment.png';
import profileImg from '../../public/profile.png';
import testImg1 from '../../public/testImg1.png';

const Post = ({ data }) => {

	const [like, setLike] = useState(true)

	let names = data.name ? (data.lastname ? data.name + " " + data.lastname : data.name) : (data.lastname ? data.lastname : "")
	let profileImage = data.profile ? data.profile : profileImg
	let usernameStyles = names ? {} : {fontSize: '1.1rem'}
	let isLike = like ? likeFillImg : likeImg

	return (
		<div className="publicationContainer">
			<div className="user">
				<Image width='64' height='64' src={profileImage} alt="Usuario"/>
				<div className='info' >
					{names && <span className="names">{names}</span>}
					<span style={usernameStyles} className="username">@fschulz</span>
					<span className='date'>Hace 1 hora</span>
				</div>
				<div className="delete">
					<div></div>
					<div></div>
				</div>
			</div>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iure, quos dolorem eligendi totam velit ullam. Voluptate eos.</p>
			{data.image && <Image width='auto' height='auto' className='publication' alt='Usuario' src={testImg1} />}
			<div className="actions">
				<div>
					<Image width='30' height='auto' src={isLike} alt='Me gusta' onClick={()=> setLike(!like)} />
					30
				</div>
				<div>
					<Image width='30' height='auto' src={commentImg} alt='Comentar' />
					30
				</div>
			</div>
		</div>
	)
}

export default Post;