import styles from 'styles/LoginForm.module.sass';
import { useState, useCallback, ChangeEvent, MouseEvent } from 'react';
import { Account, RegisterAccount, LoginFormState } from 'types';
import { signIn } from 'next-auth/react';

const DEFAULT_ACCOUNT: Account = {
    username: '',
    password: '',
    email: '',
};

const LoginForm = () => {
    const [account, setAccount] = useState<Account>(DEFAULT_ACCOUNT);
    const [error, setError] = useState<unknown | any>('');
    const [loginFormState, setLoginFormState] = useState<LoginFormState>(LoginFormState.LOGIN);

    const updateAccount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setAccount((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setError('');
    }, []);
    const handleLoginFormState = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setError('');
        setLoginFormState((prev) => prev === LoginFormState.LOGIN ? LoginFormState.REGISTER : LoginFormState.LOGIN);
    }, [setLoginFormState]);
    const registerNewAccount = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();
        const registerAccount: RegisterAccount = { ...account, createdAt: new Date() };
        try {
            const response = await fetch('/api/registerAccount', {
                method: 'POST',
                body: JSON.stringify(registerAccount),
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' }
            });
            switch (response.status) {
                case 200:
                    const savedAccount = await response.json();
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
    const handleLogin = useCallback(async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();
        const res = await signIn('credentials', {
            username: account.username,
            password: account.password,
            redirect: false
        });
        const { error } = res!;
        if (error) { setError(error); };
        console.log(res);
    }, [account]);

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
                {loginFormState === LoginFormState.LOGIN ?
                    <>
                        {error && <span className={styles.errorMessage}>{error}</span>}
                        <button className={styles.button} id="login" onClick={(e) => handleLogin(e)}>Login</button>
                    </>
                    :
                    <>
                        <label className={styles.label} htmlFor="email">Email:</label>
                        <input type="text" id="email" onChange={updateAccount} value={account.email} className={styles.input} />
                        {error && <span className={styles.errorMessage}>{error}</span>}
                        <button className={styles.button} id="register" onClick={(e) => registerNewAccount(e)}>Register</button>
                    </>
                }
                <button className={styles.button} id="noaccount" onClick={(e) => handleLoginFormState(e)}>
                    {loginFormState === LoginFormState.LOGIN ? 'no account yet?' : 'back to login'}
                </button>
            </div>
        </form >
    );
};

export default LoginForm;