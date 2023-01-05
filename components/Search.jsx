import { useState } from "react"
import searchImg from "../public/search.png"
import profileImg from "../public/profile.png"
import Image from "next/image"

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

const SearchItem = ({ search })=> {

    // Si existe un nombre de usuario devuelve ese nombre, sino devuelve el hashtag
    // Si no existe un nombre de usuario significa que se busco un hashtag
    let content = search.username ? search.username : search.hashtag
    // Si existen nombre y apellido, devuelve ambos. Si existe nombre pero no apellido, devuelve nombre. Si no existe nombre pero si apellido, devuelve apellido
    let names = search.name ? (search.lastname ? search.name + ' ' + search.lastname : search.name) : (search.lastname ? search.lastname : '')

    return(
        <div className="item">
            {/* Si no existe un hashtag, devuelve la imagen del usuario */}
            {!search.hashtag && <Image width={48} height={48} src={search.image ? search.image : profileImg} alt={search.username} />}
            {/* Si existe un hashtag, devuelve el icono de hashtag */}
            {search.hashtag && <div className="hashtag"><span>#</span></div>}
            <div>
                <h4>{content}</h4>
                {/* Si no existe ningun nombre, no devuelve nada */}
                {names && <span>{names}</span>}
            </div>
        </div>
    )
}

const Search = ({ swipe }) => {

    // Almacena las busquedas recientes
    const [recentSearches, setRecentSearches] = useState(dataTest)

    return(
        <div className={swipe ? "searchContainer" : "searchContainer front"}>
            <div className="search">
                <Image width={22} height={22} src={searchImg} alt="Buscar" />
                <input placeholder="Buscar" maxLength={30} type="text" />
            </div>

            {/* Si hay busquedas recientes, las itera y muestra en pantalla */}
            {recentSearches.length > 0 && <div className="recentSearches">
                <span>Recientes</span>
                {recentSearches.map(search => {
                    return <SearchItem key={search.hashtag || search.username} search={search} />
                })}
            </div>}
            
            {/* Si no las hay, muestra la pantalla de "no hay busquedas" */}
            {recentSearches.length < 1 && <div className="noSearches">
                <span>No hay busquedas<br/>recientes</span>
            </div>}
        </div>
    )
}

export default Search