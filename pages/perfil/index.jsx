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

    // Lista de publicaciones
    const [publications, setPublications] = useState([dataTest1, dataTest2, dataTest1, dataTest2, dataTest1, dataTest2, dataTest1, dataTest2])
    // Publicacion seleccionada
    const [seePost, setSeePost] = useState([null])
    // Ver imagen del perfil
    const [seeImage, setSeeImage] = useState(false)

    // Si se accede a un post se bloquea el scroll, si no se desbloquea
    const onSeePostHandler = (post, index)=> {
        setSeePost([post, index])
        if (post) return document.body.style.overflowY = 'hidden'
        return document.body.style.overflowY = 'auto'
    }
    
    let backgroundImage = { backgroundImage: 'url(' + testImg1.src + ')' }

    return (
        <div className="profileContainer">
            <div className="navbar"></div>
            <div style={backgroundImage} className="background"/>
            <div className="header">
                <div className="user">
                    {/* Al hacer click se muestra la imagen */}
                    <Image placeholder="blur" onClick={()=> setSeeImage(true)} width={120} height={120} src={profileImg} alt="Test" />
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

            {/* Imagen de perfil */}
            {seeImage && <div className="seeImage" onClick={()=> setSeeImage(false)} >
                <Image placeholder="blur" width={200} height={200} src={profileImg} alt="nombreDeUsuario" />
            </div>}

            {/* Publicaciones */}
            {publications.length > 0 && <div className="publications">
                {publications.map((post, index) => {
                    return <Image placeholder="blur" key={index} onClick={()=> onSeePostHandler(post, index)} src={post.image} alt="" />
                })}
            </div>}
            
            {/* Pantalla de sin publicaciones  */}
            {publications.length < 1 && <div className="noPublications">
                <span>No tienes ninguna publicación</span>
                <span>Haz una ahora</span>
            </div>}

            {/* Fondo blanco */}
            {seePost[0] && <div className="seeBackground"></div>}

            {/* Lista de publicaciones tras acceder a una */}
            {seePost[0] && <div className="seePublications">
                <div className="nav">
                    <Image onClick={()=> onSeePostHandler(null, null)} width={30} height={30} src={arrowImg} alt="Volver atras" />
                    <span>Publicaciones</span>
                </div>
                <div className="publicationsList">
                    <Post data={seePost[0]} overflow={false} />
                    {/* Se muestran las demas ignorando la almacenada */}
                    {publications.map((post, index) => {
                        if (index !== seePost[1]) return <Post key={index} data={post} overflow={false} />
                    })}
                </div>
            </div>}
        </div>
    )
}

export default Profile