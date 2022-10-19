import styles from '../styles/Home.module.sass';
import type { NextPage } from 'next';
import { LoginForm } from 'components';

const Home: NextPage = () => {

  return (
    <div className={styles.home}>
      <LoginForm />
    </div>
  );
};

export default Home;
