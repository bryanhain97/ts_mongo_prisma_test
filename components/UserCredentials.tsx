import styles from 'styles/Credentials.module.sass';
import { Credentials } from 'types';
import { useSession } from 'next-auth/react';

const UserCredentials = (credentials: Credentials) => {
    const { data: session } = useSession();

    return (
        <div className={styles.credentials}>
            <div className={styles.credential}>
                <span className={styles.label}>Username:</span>
                <span className={styles.username}>{session!.user!.name}</span>
            </div>
            <div className={styles.credential}>
                <span className={styles.label}>Email:</span>
                <span className={styles.email}>{session!.user!.email}</span>
            </div>
        </div >
    );
};

export default UserCredentials;