import { useState } from "react"
import Navbar from "../../components/Nav/Navbar"
import ProfileHeader from "../../components/Perfil/ProfileHeader"
import ProfileImage from "../../components/Perfil/ProfileImage"
import ProfilePublications from "../../components/Perfil/ProfilePublications"
import ProfilePublicationsList from "../../components/Perfil/ProfilePublicationsList"
import testImg1 from "../../public/testImg1.png"

let dataTest1 = {
    username: "adakos",
    image: testImg1,
    date: "31 de diciembre",
    content: "texto de prueba texto de prueba texto de texto de prueba texto de prueba texto de",
    comments: [{ username: 'adakos', image: '', content: 'texto de prueba texto de prueba texto de prueba' }]
}

const Profile = () => {

    const [publications, setPublications] = useState([dataTest1, dataTest1, dataTest1, dataTest1])
    const [seePost, setSeePost] = useState([null, null])
    const [seeImage, setSeeImage] = useState(false)

    const onSeePostHandler = (post, index)=> {
        setSeePost([post, index])
        if (post) return document.body.style.overflowY = 'hidden'
        return document.body.style.overflowY = 'auto'
    }

    return (
        <div className="profileContainer">
            <ProfileHeader setSeeImage={setSeeImage} />
            <ProfileImage seeImage={seeImage} setSeeImage={setSeeImage} />
            <ProfilePublications publications={publications} onSeePostHandler={onSeePostHandler} />
            <ProfilePublicationsList seePost={seePost} onSeePostHandler={onSeePostHandler} publications={publications} />
            <Navbar/>
        </div>
    )
}

export default Profile