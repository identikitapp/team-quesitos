import { Navbar } from "../components/Nav/Navbar"
import "../styles/index.scss"

export default function App({ Component, pageProps }) {
  return(
    <>
    <Navbar />
    <Component {...pageProps} />
    </>
  )
}
