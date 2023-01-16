import { useState } from "react"
import Coments from "../../components/coments/Coments"
import Nav from "../../components/nav/nav"
import { useUserContext } from "../../context/user"

const Profile = () => {

    const { user } = useUserContext()
    // const [publications, setPublications] = useState([dataTest1, dataTest1, dataTest1, dataTest1])
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
            <Coments />
        </div>
    )
}

export default Profile