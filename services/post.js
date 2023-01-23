const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const createPost = async (content, image, token)=> {

    let myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    
    let formdata = new FormData(); 
    if (content) formdata.append("content", content);
    if (image) formdata.append("image", image, image.name);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    
    return await fetch(API_URL + "/post/create", requestOptions).then(response => response.json())
}