import type { NextPage } from 'next';

import Footer from '../components/Footer';
import Main from '../components/Main';
import Profile from '../components/Profile';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.Container}>
      <Profile />

      <Main />

      <Footer />
    </div>
  )
}

export default Home
