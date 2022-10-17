import styles from '../styles/Layout.module.sass';
import Navbar from './Navbar';
import { ReactElement } from 'react';


const Layout = ({ children }: { children: ReactElement }) => {
    return (
        <>
        {/* next/head */}
            <div className={styles.layout}>
                <Navbar />
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;