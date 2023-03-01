import { useEffect, useState } from "react"
import { getSession } from "next-auth/react"
import { useRouter } from 'next/router'
import usePostList from "hooks/usePostList"
import { getUserPost } from "services/post"
import { getUser } from "services/user"
import HeaderProfile from "components/headerProfile/HeaderProfile"
import Post from "components/post/Post"
import Navbar from "components/navbar/Navbar"
import { useUserContext } from "context/user"

const initialState = {
    id: "",
    username: "",
    name: "",
    lastname: "",
    image: ""
}

const Profile = () => {
    const [userData, setUserData] = useState(initialState)
    const router = useRouter()
    const { userId } = router.query
    const { user } = useUserContext()
    const { visor, docs } = usePostList(getUserPost, userId)
    
    useEffect(()=> {
        if (router.asPath !== router.route) {
            const unsub = ()=> {
                getSession().then(session => {
                    getUser(session.user.token, router.query.userId).then(res => {
                        setUserData(res.data)            
                    }).catch(error => {
                        console.log(error)
                    })
                }).catch(err => {
                    console.log(err)
                })
            }
            return unsub()
        }
    }, [router])

    return (
        <div className="profileContainer">
            <Navbar />
            <HeaderProfile user={userData} />
            <div className="postList">
                {docs.length > 0 && docs.map(doc => { return <Post key={doc._id} data={doc} userId={user.id} /> })}
                <div ref={visor} id="visor"></div>
            </div>
        </div>
    )
}

export default Profile