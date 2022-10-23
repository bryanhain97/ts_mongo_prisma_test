import styles from '../styles/LoginForm.module.sass';
import { useState, useCallback, ChangeEvent, EventHandler, MouseEventHandler, FormEventHandler, useEffect } from 'react';
import { Account, SaveAccount } from '@types';


const DEFAULT_ACCOUNT: Account = {
    username: '',
    createdAt: undefined,
    password: '',
    email: '',
};

const LoginForm = () => {
    const [account, setAccount] = useState<Account>(DEFAULT_ACCOUNT);
    const [error, setError] = useState<unknown | any>('');

    const updateAccount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setAccount((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setError('');
    }, []);

    const loginWithAccount = async (e: Event | any, account: Account) => {
        e.preventDefault();
        const saveAccount: SaveAccount = { ...account, createdAt: new Date() };
        try {
            const response = await fetch('/api/loginWithAccount', {
                method: 'POST',
                body: JSON.stringify(saveAccount),
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' }
            });
            switch (response.status) {
                case 200:
                    const savedAccount = await response.json();
                    console.log(savedAccount);
                    setAccount(DEFAULT_ACCOUNT);
                    setError('');
                    break;
                case 400:
                    const { message } = await response.json();
                    throw new Error(message);
            }
        }
        catch ({ message }: any | unknown) {
            setError(message);
        }
    };

    return (
        <form className={styles.login}>
            <div className={styles.login_field}>
                <label className={styles.label} htmlFor="username">
                    Username:
                </label>
                <input type="text" id="username" onChange={updateAccount} value={account.username} className={styles.input} />
            </div>
            <div className={styles.login_field}>
                <label className={styles.label} htmlFor="password">
                    Password:
                </label>
                <input type="password" id="password" onChange={updateAccount} value={account.password} className={styles.input} />
            </div>
            <div className={styles.login_field}>
                <label className={styles.label} htmlFor="email">
                    Email:
                </label>
                <input type="text" id="email" onChange={updateAccount} value={account.email} className={styles.input} />
                {error &&
                    <span className={styles.errorMessage}>{error}</span>
                }
            </div>
            <button className={styles.button} onClick={(e) => loginWithAccount(e, account)}>
                Login
            </button>
        </form>
    );
};

export default LoginForm;