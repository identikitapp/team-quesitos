import { useState } from "react"
import PostActions from "./PostActions"
import PostHeader from "./PostHeader"
import Image from "next/image"

const Post = ({ data })=> {

    const [seeComments, setSeeComments] = useState(false)
    const [like, setLike] = useState(false)

    return(
        <div className="postContainer">
            <PostHeader data={data} />
            <Image placeholder="blur" onDoubleClick={()=> setLike(!like)} className="postImage" src={data.image} alt={data.username} />
            <PostActions like={like} setLike={setLike} data={data} />
        </div>
    )
}

export default Post