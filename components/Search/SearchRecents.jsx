import SearchItem from "./SearchItem"

const SearchRecents = ({ recentSearches })=> {
    if (recentSearches.length > 0) {
        return(
            <div className="recentSearches">
                <span>Recientes</span>
                {recentSearches.map(search => {
                    return <SearchItem key={search.hashtag || search.username} search={search} />
                })}
            </div>
        )
    } else {
        return(
            <div className="noSearches">
                <span>No hay busquedas<br/>recientes</span>
            </div>
        )
    }
}

export default SearchRecents