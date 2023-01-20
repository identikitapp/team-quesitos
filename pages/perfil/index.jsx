import { useState } from "react"
import Nav from "../../components/nav/Nav"

const Profile = () => {

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
        </div>
    )
}

export default Profile