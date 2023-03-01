import usePostList from "hooks/usePostList"
import { getUserPost } from "services/post"
import HeaderProfile from "components/headerProfile/HeaderProfile"
import Post from "components/post/Post"
import Navbar from "components/navbar/Navbar"
import { useUserContext } from "context/user"

const Profile = () => {

    const { user } = useUserContext()
    const { visor, docs } = usePostList(getUserPost, user.id)

    return (
        <div className="profileContainer">
            <Navbar />
            <HeaderProfile user={user} />        
            <div className="postList">
                {docs.length > 0 && docs.map(doc => { return <Post key={doc._id} data={doc} userId={user.id} /> })}
                <div ref={visor} id="visor"></div>
            </div>
        </div>
    )
}

export default Profile