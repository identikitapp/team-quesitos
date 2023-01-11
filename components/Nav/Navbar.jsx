import NavbarMobile from "./Mobile"
// import NavbarTablet from "./Tablet"
import NavbarDesktop from "./Desktop"

const Navbar = () => {
    return (
        <div className="navbar">
            <NavbarMobile />
            <NavbarDesktop />
            {/* <NavbarTablet /> */}
        </div>
    )
}

export default Navbar