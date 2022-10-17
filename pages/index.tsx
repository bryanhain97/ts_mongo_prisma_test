import type { NextPage } from 'next';
import styles from '../styles/Home.module.sass';

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <form className={styles.login}>
        <div className={styles.login_field}>
          <label className={styles.label} htmlFor="accountname">
            Accountname:
          </label>
          <input type="text" id="accountname" />
        </div>
        <div className={styles.login_field}>
          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <input type="password" id="password" />
        </div>
        <button className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Home;
