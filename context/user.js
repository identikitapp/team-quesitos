import { createContext, useContext, useEffect, useState } from 'react';
import { getUser } from '../services/user';

const UserContext = createContext();

export function UserProvider({ children }) {
  	const [user, setUser] = useState({ id: "", username: "" })
	const [update, setUpdate] = useState(false)

	useEffect(()=> {
		let unsub = async ()=> {
			const userData = await getUser();
			if (!userData.error) setUser(userData);
			else console.log(userData.error);
		}
		return ()=> unsub();
	}, [update])

  	let values = { user, setUser, update, setUpdate }

	return (
		<UserContext.Provider value={values}>
		{children}
		</UserContext.Provider>
	);
}

export function useUserContext() {
  	return useContext(UserContext);
}