import styles from '../styles/LoginForm.module.sass';
import { useState, useCallback, ChangeEvent, EventHandler, MouseEventHandler, FormEventHandler } from 'react';
import { Account } from '@types';

const LoginForm = () => {
    const [account, setAccount] = useState<Account>({
        username: '',
        password: ''
    });

    const updateAccount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setAccount((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }, []);

    const loginWithAccount = async (e: Event | any, account: Account) => {
        e.preventDefault();
        const response = await fetch('/api/loginWithAccount', {
            headers: {
                method: 'POST',
                body: JSON.stringify(account),
                mode: 'cors',
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
    };

    return (
        <form className={styles.login}>
            <div className={styles.login_field}>
                <label className={styles.label} htmlFor="accountname">
                    Accountname:
                </label>
                <input type="text" id="username" onChange={updateAccount} />
            </div>
            <div className={styles.login_field}>
                <label className={styles.label} htmlFor="password">
                    Password:
                </label>
                <input type="password" id="password" onChange={updateAccount} />
            </div>
            <button className={styles.button} onClick={(e) => loginWithAccount(e, account)}>
                Login
            </button>
        </form>
    );
};

export default LoginForm;