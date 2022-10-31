import styles from 'styles/Navbar.module.sass';
import { ReactElement, useState } from 'react';
import NavbarElement from './NavbarElement';
import { useSession } from 'next-auth/react';

const Navbar = (): ReactElement => {
    const { status } = useSession();
    return (
        <nav className={styles.navbar}>
            <NavbarElement href="/" title="home" />
            <NavbarElement href="/thoughts" title="thoughts" />
            <NavbarElement href="/about" title="about" />
            <NavbarElement
                href={status === 'authenticated' ? '/auth/signout' : '/auth/signin'}
                title={status === 'authenticated' ? 'sign out' : 'sign in'}
            />
        </nav>
    );
};

export default Navbar;