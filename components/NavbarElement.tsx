import styles from 'styles/Navbar.module.sass';
import Link from 'next/link';
import { ReactElement } from 'react';
import {
    NavbarLinkProps
} from '@types';

const NavbarElement = ({
    href = '#',
    title = 'default'
}: NavbarLinkProps
): ReactElement => {
    return (
        <div className={styles.navbar_element}>
            <Link href={href} className={styles.navbar_link}>
                <a className={styles.navbar_link_title}>
                    {title}
                </a>
            </Link>
        </div>
    );
};

export default NavbarElement;