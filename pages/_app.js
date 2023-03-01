import { SessionProvider } from "next-auth/react"
import { PostProvider } from "context/post"
import { UserProvider } from "context/user"
import "./index.scss"

export default function App({ Component, pageProps: {session, ...pageProps} }) {

  return(
    <SessionProvider session={session}>
      <UserProvider>
        <PostProvider>
          <Component {...pageProps} />
        </PostProvider>
      </UserProvider>
    </SessionProvider>
  )
}