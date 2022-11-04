import styles from 'styles/Navbar.module.sass';
import { ReactElement } from 'react';
import NavbarElement from './NavbarElement';
import UserCredentials from './UserCredentials';
import { useSession } from 'next-auth/react';

const Navbar = (): ReactElement => {
    const { data: session, status } = useSession();
    return (
        <nav className={styles.navbar}>
            <NavbarElement href="/" title="home" />
            <NavbarElement href="/thoughts" title="thoughts" />
            <NavbarElement href="/about" title="about" />
            {status === 'authenticated' &&
                <UserCredentials
                    username={session.user!.name}
                    email={session.user!.email}
                />
            }
            <NavbarElement
                href={status === 'authenticated' ? '/auth/signout' : '/auth/signin'}
                title={status === 'authenticated' ? 'sign out' : 'sign in'}
            />
            {/* ###### TODO: create react button component for signin / signout ###### */}
        </nav>
    );
};

export default Navbar;