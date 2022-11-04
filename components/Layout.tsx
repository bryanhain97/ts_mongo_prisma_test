import styles from 'styles/Layout.module.sass';
import Navbar from './Navbar';
import { useSession } from 'next-auth/react';
import { ReactElement } from 'react';


const Layout = ({ children }: { children: ReactElement }) => {
    const { data: session, status } = useSession();
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