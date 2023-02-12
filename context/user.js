import { getSession } from 'next-auth/react';
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  	const [user, setUser] = useState({ id: "", username: "" })
	const [update, setUpdate] = useState(false)

	useEffect(()=> {
		const unsub = ()=> {
			getSession().then(res => {
				if (res) {
					setUser(res.user)
				}
			})
		}
		return unsub();
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