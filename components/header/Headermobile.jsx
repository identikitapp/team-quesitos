import Image from "next/image"
import Link from 'next/link'
import { useState } from "react"
import logo from "../../public/logo.png"
import profile from "../../public/profile2.png"

let profileHeader = {
  name: '@Adakos_99',
  followers: 333,
  following: 333,
  hashtag: ['#fitness', '#deportes', '#tenis']

}

export const Headermobile = () => {
  const [image, setImage] = useState(true)


  return (
    <div className="headerMobile">

      <div className='logo'>
        <Link href={'/'}><Image width={40} height={40} src={logo} alt='logo' /></Link>

      </div>
      <div className="header">
      </div>
      <div className={`headerProfile`}>
        <Image onClick={() => setImage(!image)} className={image ? 'imgProfile' : 'imgProfileMax'} width={70} height={70} src={profile} alt='profile' ></Image>

        <div className="follows">
          <h2> <p className="name">{profileHeader.name}</p> </h2>
          <br />
          <div className="followersDisplay">
            <h3>
              <h5>following</h5>
              <p>{profileHeader.following} </p>
            </h3>
            <h3>
              <h5> followers </h5>
              <p>{profileHeader.followers} </p>
            </h3>

          </div>
          <div className="hashtag">

      <b>{profileHeader.hashtag[0]}</b>
      <b>{profileHeader.hashtag[1]}</b>
      <b>{profileHeader.hashtag[2]}</b>
          </div>

        </div>
        <div>
        </div>


      </div>
    </div>

  )
}

