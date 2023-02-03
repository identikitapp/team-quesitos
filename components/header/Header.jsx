import Image from 'next/image'
import { useEffect } from 'react'
import { useUserContext } from '../../context/user'
import useFeed from '../../hooks/useFeed'
import Post from '../post/Post'


const Header = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL 
  const {user} = useUserContext()
  const { update, setUpdate, visor, docs } = useFeed()
  
  let name = docs.length > 0 && docs.some(name => {return name.owner.name})
  let lastname = docs.length > 0 && docs.some(lastName => {return lastName.owner.lastname})
  let image = docs.length > 0 && docs.some( img => {return img.owner.image} )

  return (
    <div className="headerContain">
        <div className="headerImg">
        </div>
      <div className="userImg">
        <div>
          {{image} && <Image priority width={78} height={78} src="/assets/profile.png" alt='user'></Image>}
      <div className='user'>
      <h2>{user && user.username}</h2>
       {{name} && <h6>Nombre</h6>}
       {{lastname} && <h6>Apellido</h6>}

      </div>
        </div>
      </div>
      <div className='public'>
      {docs.map(doc => { return <Post key={doc._id} data={doc} userId={user.id} /> })}
            <div ref={visor} id="visor"></div>
      </div>
    </div>
  )
}

export default Header