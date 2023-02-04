import Image from 'next/image'
import { useUserContext } from '../../context/user'
import Post from '../post/Post'
import PropTypes from 'prop-types'

const HeaderProfile = () => {
	const {user} = useUserContext()

	let names = user.name ? (user.lastname ? user.name + " " + user.lastname : user.name) : (user.lastname ? user.lastname : "")
	let userImage = user.image ? user.image : "/assets/profile.png"

	return (
		<div className="headerContainer">
			<div className="headerImage">
				<Image width={78} height={78} alt={user.username} src={userImage} className='userImage' priority />
			</div>
			<div className='user'>
				<h2>{user.username}</h2>
				<h4>{names ? names : 'Nombre Apellido'}</h4>
			</div>
		</div>
	)
}

Post.propTypes = {
	userId: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
}

export default HeaderProfile