import { SessionProvider } from "next-auth/react"
import { UserProvider } from "../context/user"
import "../styles/index.scss"

export default function App({ Component, pageProps: {session, ...pageProps} }) {

  return(
    <SessionProvider session={session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  )
}