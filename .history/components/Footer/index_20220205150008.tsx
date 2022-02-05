import Link from 'next/link';
import { useCallback, useState } from 'react';
import styles from './styles.module.scss';

function Footer() {
  const [ link, setLink ] = useState('https://github.com/jonatasJS');
  const [ linkName, setLinkName ] = useState('jonatasJS');

  useCallback(() => {
    setInterval(() => {
      if(link === 'https://github.com/jonatasJS') {
        setLink('https://jonatas.app/');
        setLinkName('Next Rocket');
      }
      else {
        setLink('https://github.com/jonatasJS');
        setLinkName('jonatasJS');
      }
    }, 5000);
  }, []);

  return (
    <footer className={styles.Footer}>
        <p spellCheck="false">
          Powered by
          <Link href={link}><a target="_blank">
            <span className={styles.Logo}>
              {linkName}</a></Link>
          </span>
        </p>
      </footer>
  );
}

export default Footer;