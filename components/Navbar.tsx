import styles from '../styles/Navbar.module.sass';
import { ReactElement } from 'react';
import NavbarElement from './NavbarElement';

const Navbar = (): ReactElement => {
    return (
        <nav className={styles.navbar}>
            <NavbarElement href="/" title="Home" />
            <NavbarElement href="/thoughts" title="thoughts" />
            <NavbarElement href="/about" title="about" />
        </nav>
    );
};

export default Navbar;