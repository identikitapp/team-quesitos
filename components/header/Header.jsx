import Image from 'next/image'
import { useState } from 'react'
import { useUserContext } from '../../context/user'
import useFeed from '../../hooks/useFeed'
import Post from '../post/Post'


const Header = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL 
  const {user} = useUserContext()
  const { update, setUpdate, visor,docs } = useFeed()

  let name = user.name ? user.name : <h6>Nombre</h6>
  let lastName = user.lastname ? user.lastname : <h6>Apellido</h6>
  let image = user.image ? user.image : <Image className='logo' priority width={78} height={78} src="/assets/profile.png" alt='user'></Image>
  let username = user && user.username

  
  return (
    <div className="headerContain">
        <div className="headerImg">
        </div>
      <div className="userImg">
        <div>
           {image}
           
      <div className='user'>
      <h2>{username}</h2>
      {name}
      {lastName}
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