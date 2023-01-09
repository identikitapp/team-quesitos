import { NavBar } from "../components/Nav/NavBar"
import "../styles/index.scss"

export default function App({ Component, pageProps }) {
  return (
    <>
    <NavBar/>
    <Component {...pageProps} />
    </>
  )
}
