import Image from "next/image"
import profileImg from "../../public/profile.png"
import testImg1 from "../../public/testImg1.png"

const ProfileHeader = ({ setSeeImage })=> {

    let backgroundImage = { backgroundImage: 'url(' + testImg1.src + ')' }

    return(
        <>
        <div style={backgroundImage} className="background"/>
        <div className="header">
            <div className="user">
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
        </>
    )
}

export default ProfileHeader