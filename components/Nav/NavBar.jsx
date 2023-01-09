import { useMediaQuery} from "react-responsive"
import { Desktop } from "./Desktop"
import { Mobile } from "./Mobile"

const NavbarDesktop = ()=> {
    return <Desktop/>
}

const NavbarMobile = ()=> {
    return <Mobile/>
}




export const NavBar = () => {

    // Media query
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)'
    })

    // Si se cumple la media query, muestra navbar de escritorio
    if (isDesktop) return <NavbarDesktop />

    // Si no, muestra la de mobile
    return <NavbarMobile />
}


