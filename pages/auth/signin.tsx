import { LoginForm } from 'components';
import styles from 'styles/LoginPage.module.sass';

const LoginPage = () => {


    return (
        <div className={styles.loginPage}>
            <LoginForm />
        </div>);
};


export default LoginPage;