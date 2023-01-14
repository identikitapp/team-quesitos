import logo from '../../public/title.png'
import Image from 'next/image'
import logoUser from '../../public/user2.png'
import Link from 'next/link'

const userName = {
name: 'Adakos'
}

const User = () => {
  return (
    <div className='user'>
    <div className='logo'>
        <Link href={'/'}> <Image width={150} height={25} src={logo} alt='user' /></Link>
    </div>
  <div className='name'>
    <h3>{userName.name}</h3>
    <Image className='logoUser' width={28.86} height={28.43} src={logoUser} alt='logoUser' />

  </div>
    </div>
  )
}

export default User