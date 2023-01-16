<<<<<<< HEAD
<<<<<<< HEAD
=======
import Nav from "../../components/nav/nav"
>>>>>>> ramaSimon
import Post from "../../components/Post/Post"
import { useUserContext } from "../../context/user"
import testImg1 from "../../public/testImg1.png"

let dataTest1 = {
    username: "adakoss",
    image: testImg1,
    date: "28 de diciembre",
    content: "texto de prueba texto de prueba texto de texto de prueba texto de prueba texto de prueba texto de prueba texto de",
    likes: 0,
    comments: []
}

const Publications = ()=> {

    return(
        <div className="publicationsContainer">
            <Post data={dataTest1} />
            <Post data={dataTest1} />
        </div>
    )
}

=======
>>>>>>> 316d12fd2ad0de010bd5bcc40d31bdfcc1856643
const Feed = () => {

    const { user } = useUserContext()

    return (
        <div className="feedContainer">
<<<<<<< HEAD

=======
            <Nav/>
            <Publications />
>>>>>>> ramaSimon
        </div>
    )
}

export default Feed