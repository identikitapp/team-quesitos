import Image from 'next/image'
import { useUserContext } from '../../context/user'
import useFeed from '../../hooks/useFeed'
import Post from '../post/Post'

const Header = ({data}) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL 
  const {user} = useUserContext()
  const { update, setUpdate, visor, docs } = useFeed()
  return (
    <div className="headerContain">
        <div className="headerImg">
        </div>
      <div className="userImg">
        <div>
      <Image width={78} height={78} src="/assets/testImg.jpeg" alt='user'></Image>
      <div className='user'>
      <h2>{user&&user.username}</h2>
      <h6>nombre y apellido</h6>

      </div>
        </div>
      </div>
      <div className='public'>
      {docs.length > 0 && docs.map(doc => { return <Post key={doc._id} data={doc} userId={user.id} /> })}
            <div ref={visor} id="visor"></div>
      </div>
    </div>
  )
}

export default Header