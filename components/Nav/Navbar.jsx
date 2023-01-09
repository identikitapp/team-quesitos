import { useMediaQuery} from "react-responsive"
import { NavbarDesktop } from "./Desktop"
import { NavbarMobile } from "./Mobile"

export const Navbar = () => {

    // Media query
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })

    // Si se cumple la media query, muestra navbar de escritorio
    if (isDesktop) return <NavbarDesktop />

    // Si no, muestra la de mobile
    return <NavbarMobile />
}


