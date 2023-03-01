import NavbarMobile from './NavbarMobile';
import styles from "./navbar.module.scss";

const Navbar = () => {
	return (
		<div className={styles.navbarContainer}>
			<NavbarMobile />
		</div>	
	)
}

export default Navbar