import NavbarMobile from "./Mobile"
import NavbarTablet from "./Tablet"
import NavbarDesktop from "./Desktop"

const Navbar = () => {
    return(
        <div className="navbar">
            <NavbarMobile />
            <NavbarTablet />
            <NavbarDesktop />
        </div>
    )
}

export default Navbar