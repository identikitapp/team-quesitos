import { useState } from "react"
import Comments from "./Comments"
import PostActions from "./PostActions"
import PostHeader from "./PostHeader"
import Image from "next/image"

const Post = ({ data, overflow })=> {

    const [seeComments, setSeeComments] = useState(false)
    const [like, setLike] = useState(false)

    const onSeeCommentsHandler = (value)=> {
        setSeeComments(value)
        if (value) return document.body.style.overflowY = 'hidden'
        else if (!value && overflow) return document.body.style.overflowY = 'auto'
    }

    return(
        <div className="postContainer">
            <PostHeader data={data} />
            <Image placeholder="blur" onDoubleClick={()=> setLike(!like)} className="postImage" src={data.image} alt={data.username} />
            <PostActions like={like} setLike={setLike} onSeeCommentsHandler={onSeeCommentsHandler} data={data} />
            <Comments comments={data.comments} seeComments={seeComments} onSeeCommentsHandler={onSeeCommentsHandler} />
        </div>
    )
}

export default Post