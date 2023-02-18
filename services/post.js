const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const createPost = async (content, image, token)=> {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    
    const formdata = new FormData(); 
    formdata.append("content", content);
    if (image) formdata.append("image", image);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    
    return await fetch(API_URL + "/post/create", requestOptions).then(response => response.json())
}

export const getPost = async ({ token, page })=> {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);

    const requestOptions = {
        headers: myHeaders
    };
    
    return await fetch(API_URL + `/post/get/${page}`, requestOptions).then(response => response.json())
}

export const getUserPost = async ({ token, userId, page })=> {
    if (userId) {
        const myHeaders = new Headers();
        myHeaders.append("auth-token", token);

        const requestOptions = {
            headers: myHeaders
        };
        
        return await fetch(API_URL + `/post/get/user/${userId}/${page}`, requestOptions).then(response => response.json())
    } else {
        return { data: [], total: 0 }
    }
}

export const likePost = async (postId, token) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("content-type", "application/json")

    const options = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            postId
        })
    };
    
    return await fetch(API_URL + '/post/like', options).then(response => response.json())
}

export const commentPost = async (postId, comment, token) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("content-type", "application/json")

    const options = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            id: postId,
            comment
        })
    };
    
    return await fetch(API_URL + '/post/comment', options).then(response => response.json())
}