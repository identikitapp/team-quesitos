import Post from "../Post/Post"
import Image from "next/image"
import arrowImg from "../../public/arrow.png"

const ProfilePublicationsList = ({ seePost, onSeePostHandler, publications })=> {
    if (seePost[0]) {
        return(
            <>
            <div className="seeBackground"></div>
            <div className="seePublications">
                <div className="nav">
                    <Image onClick={()=> onSeePostHandler(null, null)} width={30} height={30} src={arrowImg} alt="Volver atras" />
                    <span>Publicaciones</span>
                </div>
                <div className="publicationsList">
                    <Post data={seePost[0]} overflow={false} />
                    {publications.map((post, index) => {
                        if (index !== seePost[1]) return <Post key={index} data={post} overflow={false} />
                    })}
                </div>
            </div>
            </>
        )
    }
}

export default ProfilePublicationsList