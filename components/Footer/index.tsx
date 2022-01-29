import Link from 'next/link';
import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles.Footer}>
        <p>
          Powered by
          <span className={styles.Logo}>
            <Link href="https://github.com/jonatasJS"><a target="_blank">Jônatas Souza Soares</a></Link>
          </span>
        </p>
      </footer>
  );
}

export default Footer;