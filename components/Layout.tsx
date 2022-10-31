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
                {session &&
                    <div className={styles.session}>
                        <div className={styles.field}>
                            <span>logged in as:</span>
                            <span>{session.user!.name}</span>
                        </div>
                        <div className={styles.field}>
                            <span>email:</span>
                            <span>{session.user!.email}</span>
                        </div>
                    </div>
                }
                <Navbar />
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;