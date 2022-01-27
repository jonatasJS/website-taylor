import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { BiShareAlt as ShareIcon } from 'react-icons/bi';
import { AiOutlineInfoCircle as InfoIcon } from 'react-icons/ai';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Profile}>
        <Image className={styles.Photo} width="150" height="150" src="/images/taylor-photo.jpg" alt="Taylor" />
        <h1 className={styles.Title}>
          Taylor Mendes
        </h1>
      </div>

      <main className={styles.Main}>


        <div className={styles.Grid}>
          <a href="https://twitter.com/taylormendes" className={styles.Card}>Canal de Vendas <ShareIcon /></a>
          <a href="https://twitter.com/taylormendes" className={styles.Card}>Contato paa Publicidade <ShareIcon /></a>
          <a href="https://twitter.com/taylormendes" className={styles.Card}>1XBET (bonus130porcento) <ShareIcon /></a>
          <a href="https://twitter.com/taylormendes" className={styles.Card}>Canal FREE <ShareIcon /></a>
          <a href="https://twitter.com/taylormendes" className={styles.Card}>Twitter <ShareIcon /></a>
          <a href="https://twitter.com/taylormendes" className={styles.Card}>Facebook <ShareIcon /></a>
        </div>

        {/* <InfoIcon className={styles.InfoIcon} width="36px" height="36px" /> */}
      </main>


      <footer className={styles.Footer}>
        <p>
          Powered by
          <span className={styles.Logo}>
            <Link href="https://github.com/jonatasJS"><a target="_blank">Jônatas Souza Soares</a></Link>
          </span>
        </p>
      </footer>
    </div>
  )
}

export default Home
