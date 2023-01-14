import { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from "react-cookie"

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    // Accedo a las cookies enviadas en el middleware
    const [cookie, setCookie] = useCookies()
    
    useEffect(()=> {
        setUser({
            id: cookie.id,
            username: cookie.username
        })
    }, [])

    let values = { user, setUser }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}