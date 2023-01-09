import fireIcon from "../../public/fireIcon.png"
import addCircle from "../../public/AddCircle.png"
import search from "../../public/search.png"
import profile from "../../public/profile2.png"
import home from "../../public/home.png"
import Image from "next/image"
import Link from 'next/link'




export const Mobile = () => {
    return (

        
        < div className='mobileContainer'>


            <Link href={'/1'}><Image className='item' width={40} height={40} src={fireIcon} /></Link>

            <Link href={'/1'}><Image className='item' width={40} height={40} src={home} /></Link>

            <Link href={'/1'}><Image className="addCircle" width={65} height={65} src={addCircle}></Image></Link>


            <Link href={'/1'}><Image className='item' width={40} height={40} src={search} /></Link>


            <Link href={'/1'}><Image className='profile' width={40} height={40} src={profile} /></Link>

        </div>

    )
}
