import styles from 'styles/Home.module.sass';
import type { NextPage } from 'next';
import { LoginForm } from 'components';

const Home: NextPage = () => {

  return (
    <div className={styles.home}>
      <h1>Test App</h1>
    </div>
  );
};

export default Home;
