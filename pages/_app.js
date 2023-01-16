import { UserProvider } from "../context/user"
import "../styles/index.scss"

export default function App({ Component, pageProps }) {
    return (
		<UserProvider>
			<Component {...pageProps} />
		</UserProvider>
	)
}