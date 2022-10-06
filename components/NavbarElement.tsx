import Link, { LinkProps } from 'next/link'
import styles from '../styles/Navbar.module.sass'
import { ReactElement } from 'react'

interface NavbarLinkProps extends LinkProps {
    title?: string;
}

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
    )
}

export default NavbarElement;