import logo from '../../public/title.png'
import Image from 'next/image'
import logoUser from '../../public/user2.png'
import Link from 'next/link'
import { useUserContext } from '../../context/user'
import search from '../../public/search.png'


const NavMobile = () => {
  const {user} = useUserContext()
  return (
    <div className='user'>
    <div className='logo'>
        <Link href={'/'}> <Image width={150} height={25} src={logo} alt='user' /></Link>
    </div>
  <div className='name'>
    <h3>{user && user.username}</h3>
   <Link href='/'>
   <Image className='search' width={28.86} height={28.43} src={search} alt='search' />
    </Link> 
    <Link href='/'>
    <Image className='logoUser' width={28.86} height={28.43} src={logoUser} alt='logo usuario' />
    </Link>


  </div>
    </div>
  )
}

export default NavMobile