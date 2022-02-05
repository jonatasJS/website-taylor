import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.scss';

function Footer() {
  const [ link, setLink ] = useState('https://github.com/jonatasJS');
  const [ linkName, setLinkName ] = useState('jonatasJS');

  use

  return (
    <footer className={styles.Footer}>
        <p spellCheck="false">
          Powered by
          <span className={styles.Logo}>
            <Link href={link}><a target="_blank">{linkName}</a></Link>
          </span>
        </p>
      </footer>
  );
}

export default Footer;