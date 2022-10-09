import Navbar from './Navbar';
import { ReactElement } from 'react';
import styles from '../styles/Layout.module.sass';


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