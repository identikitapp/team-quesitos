import { useState } from "react"
import SearchRecents from "./SearchRecents"
import Image from "next/image"
import searchImg from "../../public/search.png"

const dataTest = [{
    hashtag: '',
    image: '',
    username: 'adakos',
    name: 'franco',
    lastname: 'schulz'
}, {
    hashtag: 'hashtag1',
    image: '',
    username: '',
    name: '',
    lastname: ''
}]

const Search = ({ swipe }) => {

    const [recentSearches, setRecentSearches] = useState(dataTest)

    return(
        <div className={swipe ? "searchContainer" : "searchContainer front"}>
            <div className="search">
                <Image width={22} height={22} src={searchImg} alt="Buscar" />
                <input placeholder="Buscar" maxLength={30} type="text" />
            </div>
            <SearchRecents recentSearches={recentSearches} />
        </div>
    )
}

export default Search