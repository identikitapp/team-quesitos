import Image from 'next/image';
import Post from '../post/Post';
import PropTypes from 'prop-types';
import styles from "./headerProfile.module.scss";

const HeaderProfile = ({ user }) => {
	if (user) {
		const names = user.name ? (user.lastname ? user.name + " " + user.lastname : user.name) : (user.lastname ? user.lastname : "")
		const userImage = user.image ? user.image : "/assets/usuarioProfile.svg"

		return (
			<div className={styles.headerContainer}>
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
	return
}

Post.propTypes = {
	userId: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
}

export default HeaderProfile