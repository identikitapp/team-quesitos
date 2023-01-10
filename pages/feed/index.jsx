import useFeed from "../../hooks/useFeed"
import Post from "../../components/Post/Post"
import Search from "../../components/Search/Search"
import testImg1 from "../../public/testImg1.png"

let dataTest1 = {
    username: "adakos",
    image: testImg1,
    date: "31 de diciembre",
    content: "texto de prueba texto de prueba texto de texto de prueba texto de prueba texto de",
    likes: 20,
    comments: [
        {
            username: 'adakos',
            image: '',
            content: 'texto de prueba texto de prueba texto de prueba'
        },
        {
            username: 'adakos',
            image: '',
            content: 'texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba'
        }
    ]
}

let dataTest2 = {
    username: "adakoss",
    image: testImg1,
    date: "28 de diciembre",
    content: "texto de prueba texto de prueba texto de texto de prueba texto de prueba texto de prueba texto de prueba texto de",
    likes: 0,
    comments: []
}

const Publications = ({ swipe })=> {
    return(
        <div className={swipe ? "publicationsContainer" : "publicationsContainer back"}>
            <Post data={dataTest1} overflow={true} />
            <Post data={dataTest2} overflow={true} />
        </div>
    )
}

const Feed = () => {

    const { swipe, loader } = useFeed()

    return (
        <div className="feedContainer">
            <Publications swipe={swipe} />
            <Search swipe={swipe} />
        </div>
    )
}

export default Feed