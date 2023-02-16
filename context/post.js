import { createContext, useContext, useState } from 'react';

const PostContext = createContext();

const initialState = {
    owner: {
        id: "",
        username: "Nombre de usuario",
        name: "",
        lastname: "",
        image: ""
    },
    content: "Contenido",
    image: "",
    likes: ['asd', 'asdd'],
    createdAt: "2023-01-28T04:01:26"
}

export function PostProvider({ children }) {
  	const [post, setPost] = useState(initialState)
  	const values = { post, setPost }

	return (
		<PostContext.Provider value={values}>
		{children}
		</PostContext.Provider>
	);
}

export function usePostContext() {
  	return useContext(PostContext);
}