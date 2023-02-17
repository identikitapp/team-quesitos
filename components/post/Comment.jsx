import Image from "next/image"
import Link from "next/link"
import { formatDifTime } from "../../utilities/times"

const Comment = ({ data }) => {
    
    const userImage = data.owner.image ? data.owner.image : "/assets/profile.png"
    const time = formatDifTime(data.createdAt)

    return (
        <div className="comment">
            <div className="user">
                <Image className="userImage" width="40" height="40" alt={data.owner.username} src={userImage}/>
                <div>
                    <Link href={`/perfil/${data.owner.id}`} className="name">{data.owner.username}</Link>
                    <span className="time">{time}</span>
                </div>
                <Image width="30" height="30" alt="menu" src="/assets/post/tresPuntos.png"/>
            </div>
            <p>{data.content}</p>
        </div>
    )
}

export default Comment