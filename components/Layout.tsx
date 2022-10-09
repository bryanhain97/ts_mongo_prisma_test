import styles from '../styles/Layout.module.sass';
import Navbar from './Navbar';
import { ReactElement } from 'react';


const Layout = ({ children }: { children: ReactElement }) => {
    return (
        <>
            <Navbar />
            <main className={styles.layout}>
                {children}
            </main>
        </>
    );
};

export default Layout;