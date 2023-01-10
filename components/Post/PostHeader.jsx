import Image from "next/image"
import profileImg from "../../public/profile.png"

const PostHeader = ({ data }) => {
    return(
        <div className="userInfo">
            <Image width={34} height={34} src={data.userImage ? data.userImage : profileImg} alt={data.username} />
            <h4>{data.username}</h4>
            <span></span>
            <span>{data.date}</span>
        </div>
    )
}

export default PostHeader