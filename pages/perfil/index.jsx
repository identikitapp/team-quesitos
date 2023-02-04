import { useState } from "react"
import { useUserContext } from "../../context/user"
import useFeed from "../../hooks/useFeed"
import HeaderProfile from "../../components/headerProfile/HeaderProfile"
import Nav from "../../components/nav/Nav"
import Post from "../../components/post/Post"

const Profile = () => {
    const { update, setUpdate, visor, docs } = useFeed()
    const { user } = useUserContext()

    return (
        <div className="profileContainer">
            <Nav/>
            <HeaderProfile />        
            <div className="postList">
                {docs.length > 0 && docs.map(doc => { return <Post key={doc._id} data={doc} userId={user.id} /> })}
                <div ref={visor} id="visor"></div>
            </div>
        </div>
    )
}

export default Profile