import { useState } from "react"
import Coments from "../../components/coments/Coments"
<<<<<<< HEAD
import User from "../../components/nav/User"
=======
import Nav from "../../components/nav/nav"
>>>>>>> ramaSimon
import { useUserContext } from "../../context/user"

const Profile = () => {

<<<<<<< HEAD
<<<<<<< HEAD
    const [publications, setPublications] = useState([])
=======
=======
>>>>>>> ramaSimon
    const { user } = useUserContext()
    // const [publications, setPublications] = useState([dataTest1, dataTest1, dataTest1, dataTest1])
    const [publications, setPublications] = useState([])
    
<<<<<<< HEAD
>>>>>>> 316d12fd2ad0de010bd5bcc40d31bdfcc1856643
=======
>>>>>>> ramaSimon
    const [seePost, setSeePost] = useState([null, null])
    const [seeImage, setSeeImage] = useState(false)

    const onSeePostHandler = (post, index)=> {
        setSeePost([post, index])
        if (post) return document.body.style.overflowY = 'hidden'
        return document.body.style.overflowY = 'auto'
    }

    return (
        <div className="profileContainer">
<<<<<<< HEAD
            <span>{user && user.username}</span>
            <User/>
<<<<<<< HEAD
  <Coments/>
        
=======
            <Coments />
>>>>>>> 316d12fd2ad0de010bd5bcc40d31bdfcc1856643
=======
            <Nav/>
            <Coments />
>>>>>>> ramaSimon
        </div>
    )
}

export default Profile