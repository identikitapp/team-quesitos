import Image from 'next/image'
import Link from 'next/link'
import { useUserContext } from '../../context/user'

const NavbarMobile = () => {
	const {user} = useUserContext()
	
	const userImage = user.image ? user.image : "/assets/profile.svg"
	
	return (
		<div className='navbarMobile'>
			<Link href='/'><Image className='search' width={26} height={26} src="/assets/search.svg" alt='search' /></Link> 
			<Image priority className='logoImage' width={56} height={56} src="/assets/logo.svg" alt='user'/>
			<Image width={34} height={34} src={userImage} alt="Active Moments" className='logoUser' priority/>
		</div>
	)
}
	
export default NavbarMobile