import Image from 'next/image'
import Link from 'next/link'
import { useUserContext } from '../../context/user'

const NavMobile = () => {

  const {user} = useUserContext()

  let image = user.image ? <Image width={78} height={78} src={user.image} className='logoUser' priority> </Image> : <Image className='logoUser' priority width={35} height={35} src="/assets/profile.png" alt='user'></Image>


  return (
    <div className='user'>
      <div className="name">
      <Link href='/'>
   <Image className='search' width={28.86} height={28.43} src="/assets/search.png" alt='search' />
    </Link> 
      </div>
    <div className='logo'>
    <Link href={'/'}> <Image priority className='logoImg' width={40} height={40} src="/assets/logo.svg" alt='user' /></Link>
        <Link href={'/'}> <Image className='logoName' width={100} height={15} src="/assets/title.png" alt='user' /></Link>
    </div>
  <div className='name'>
    <Link href='/'>
    {image}
    </Link> 
  </div>
    </div>
  )
}

export default NavMobile