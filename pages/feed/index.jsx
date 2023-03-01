import usePostList from "hooks/usePostList"
import { getPost } from "services/post"
import NewPost from "components/newPost/NewPost"
import Post from "components/post/Post"
import { useUserContext } from "context/user"

const Feed = () => {
    const { update, setUpdate, visor, docs } = usePostList(getPost)
    const { user } = useUserContext()

    return (
        <div className="postList">
            <NewPost update={update} setUpdate={setUpdate} />
            {docs.length > 0 && docs.map(doc => { return <Post key={doc._id} data={doc} userId={user.id} /> })}
            <div ref={visor} id="visor"></div>
        </div>
    )
}

export default Feed