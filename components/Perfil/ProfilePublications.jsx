import Image from "next/image"

const ProfilePublications = ({ publications, onSeePostHandler })=> {
    if (publications.length > 0) {
        return(
            <div className="publications">
                {publications.map((post, index) => {
                    return <Image placeholder="blur" key={index} onClick={()=> onSeePostHandler(post, index)} src={post.image} alt="" />
                })}
            </div>
        )
    } else {
        return(
            <div className="noPublications">
                <span>No tienes ninguna publicación</span>
                <span>Haz una ahora</span>
            </div>
        )
    }
}

export default ProfilePublications