import Nav from "../../components/nav/Nav"
import NewPost from "../../components/post/NewPost"
import Post from "../../components/post/Post"
import testImg1 from "../../public/testImg1.png"

let dataTest1 = {
    username: "adakos",
    name: null,
    lastname: null,
    profile: "https://m.media-amazon.com/images/I/712Q60481-L._CR0,204,1224,1224_UX256.jpg",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iure, quos dolorem eligendi totam velit ullam. Voluptate eos.",
    image: null
}

let dataTest2 = {
    username: "adakos",
    name: "franco",
    lastname: "schulz",
    profile: "https://m.media-amazon.com/images/I/712Q60481-L._CR0,204,1224,1224_UX256.jpg",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iure, quos dolorem eligendi totam velit ullam. Voluptate eos.",
    image: null
}

let dataTest3 = {
    username: "adakos",
    name: "franco",
    lastname: "schulz",
    profile: "https://m.media-amazon.com/images/I/712Q60481-L._CR0,204,1224,1224_UX256.jpg",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iure, quos dolorem eligendi totam velit ullam. Voluptate eos.",
    image: testImg1
}

const Feed = () => {

    return (
        <div className="feedContainer">
            <NewPost />
            <Post data={dataTest1} />
            <Post data={dataTest2} />
            <Post data={dataTest3} />
        </div>
    )
}

export default Feed