const API_URL = process.env.NEXT_PUBLIC_API_URL

const initialOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'}
}

export const userRegister = async (username, email, password, confirmPassword)=> {
    const options = {
        ...initialOptions,
        body: JSON.stringify({
            username,
            email,
            password,
            confirmPassword
        })
    };
    
    let userData;
    await fetch(API_URL + '/auth/register', options).then(res => res.json()).then(res => userData = res).catch(error => userData = { promiseError: error });
    return userData;
}

export const userLogin = async (username, password) => {
    const options = {
        ...initialOptions,
        body: JSON.stringify({
            username,
            password,
        })
    };

    let userData;
    await fetch(API_URL + '/auth/login', options).then(res => res.json()).then(res => userData = res).catch(error => userData = { promiseError: error });
    return userData;
}

export const getUser = async (token, userId)=> {
    let myHeaders = new Headers();
    myHeaders.append("auth-token", token);

    let requestOptions = {
        headers: myHeaders
    };
    
    return await fetch(API_URL + `/user/get/${userId}`, requestOptions).then(res => res.json())
}