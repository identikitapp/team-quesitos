import Image from "next/image"
import profileImg from "../../public/profile.png"

const ProfileImage = ({ seeImage, setSeeImage })=> {
    if (seeImage) {
        return(
            <div className="seeImage" onClick={()=> setSeeImage(false)} >
                <Image placeholder="blur" width={200} height={200} src={profileImg} alt="nombreDeUsuario" />
            </div>
        )
    }
}

export default ProfileImage