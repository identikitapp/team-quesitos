import profileImg from "../../public/profile.png"
import Image from "next/image"

const SearchItem = ({ search })=> {

    let content = search.username ? search.username : search.hashtag
    let names = search.name ? (search.lastname ? search.name + ' ' + search.lastname : search.name) : (search.lastname ? search.lastname : '')

    return(
        <div className="item">
            {!search.hashtag && <Image width={48} height={48} src={search.image ? search.image : profileImg} alt={search.username} />}
            {search.hashtag && <div className="hashtag"><span>#</span></div>}
            <div>
                <h4>{content}</h4>
                {names && <span>{names}</span>}
            </div>
        </div>
    )
}

export default SearchItem