import { useState } from "react"
import testImg1 from "../../public/testImg1.png"
import profileImg from "../../public/profile.png"
import arrowImg from "../../public/arrow.png"
import Post from "../../components/Post"
import Image from "next/image"

let dataTest1 = {
    username: "adakos",
    image: testImg1,
    date: "31 de diciembre",
    content: "texto de prueba texto de prueba texto de texto de prueba texto de prueba texto de",
    comments: [
        {
            username: 'adakos',
            image: '',
            content: 'texto de prueba texto de prueba texto de prueba'
        },
        {
            username: 'adakos',
            image: '',
            content: 'texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba'
        }
    ]
}

let dataTest2 = {
    username: "adakoss",
    image: testImg1,
    date: "28 de diciembre",
    content: "texto de prueba texto de prueba texto de texto de prueba texto de prueba texto de prueba texto de prueba texto de",
    comments: []
}

const Profile = () => {

    const [publications, setPublications] = useState([dataTest1, dataTest2, dataTest1, dataTest2, dataTest1, dataTest2, dataTest1, dataTest2])
    const [seePost, setSeePost] = useState([null])
    
    const onSeePostHandler = (post, index)=> {
        setSeePost([post, index])
        if (post) return document.body.style.overflowY = 'hidden'
        return document.body.style.overflowY = 'auto'
    }
    
    let backgroundImage = { backgroundImage: 'url(' + testImg1.src + ')' }

    return (
        <div className="profileContainer">
            <div style={backgroundImage} className="background"/>
            <div className="header">
                <div className="user">
                    <Image width={120} height={120} src={profileImg} alt="Test" />
                    <span className="separador"></span>
                    <div className="info">
                        <h3>NombreDeUsuario</h3>
                        <span>Nombre Apellido</span>
                    </div>
                    <div className="stats">
                        <span><b>20</b>Publicaciones</span>
                        <span><b>20</b>Seguidos</span>
                        <span><b>20</b>Seguidores</span>
                    </div>
                    <button className="editProfile">Editar perfil</button>
                    <span className="publicationsTitle">Publicaciones</span>
                </div>
            </div>

            {publications.length > 0 && <div className="publications">
                {publications.map((post, index) => {
                    return <Image key={index} onClick={()=> onSeePostHandler(post, index)} src={post.image} alt="" />
                })}
            </div>}
            
            {publications.length < 1 && <div className="noPublications">
                <span>No tienes ninguna publicación</span>
                <span>Haz una ahora</span>
            </div>}

            {seePost[0] && <div className="seeBackground"></div>}

            {seePost[0] && <div className="seePublications">
                <div className="nav">
                    <Image onClick={()=> onSeePostHandler(null, null)} width={30} height={30} src={arrowImg} alt="Volver atras" />
                    <span>Publicaciones</span>
                </div>
                <div className="list">
                    <Post data={seePost[0]} overflow={false} />
                    {publications.map((post, index) => {
                        if (index !== seePost[1]) return <Post data={post} overflow={false} />
                    })}
                </div>
            </div>}
        </div>
    )
}

export default Profile