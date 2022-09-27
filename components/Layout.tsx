import Navbar from './Navbar';
import { ReactNode } from 'react';
import styles from '../styles/Layout.module.sass'


const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className={styles.layout}>
                {children}
            </main>
        </>
    )
}

export default Layout;