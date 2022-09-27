import { ReactElement } from 'react'
import styles from '../styles/Navbar.module.sass'
import NavbarElement from './NavbarElement'

const Navbar = (): ReactElement => {
    return (
        <nav className={styles.navbar}>
            <NavbarElement href="/" title="Home" />
            <NavbarElement href="/hello" title="hello" />
            <NavbarElement href="#" />
        </nav>
    )
}

export default Navbar;