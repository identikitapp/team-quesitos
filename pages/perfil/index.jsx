import { useState } from "react"
import Header from "../../components/header/Header"
import Nav from "../../components/nav/Nav"
import { useUserContext } from "../../context/user"
import useFeed from "../../hooks/useFeed"

const Profile = () => {
    const {user} = useUserContext()

    const { update, setUpdate, visor, docs } = useFeed()
    const [publications, setPublications] = useState([]) 
    const [seePost, setSeePost] = useState([null, null])
    const [seeImage, setSeeImage] = useState(false)
    
    const onSeePostHandler = (post, index)=> {
        setSeePost([post, index])
        if (post) return document.body.style.overflowY = 'hidden'
        return document.body.style.overflowY = 'auto'
    }

    return (
        <div className="profileContainer">
            <Nav/>
    <Header/>        
            <div ref={visor} id="visor"></div>

        </div>
    )
}

export default Profile