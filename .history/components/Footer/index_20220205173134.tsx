import Link from                      'next/link';
import { useEffect, useState } from 'react';
import styles from                    './styles.module.scss';

function Footer() {
  const [ link,      setLink ] =      useState(`${window?.location.origin}`);
  const [ linkName,  setLinkName ] =  useState<string>('jonatasJS');
  const [ isStarted, setIsStarted ] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      if(isStarted) return;
      setIsStarted(true);
      if(link == 'https://github.com/jonatasJS') {
        setLink('https://jonatas.app/');
        setLinkName('Next Rocket');
        console.log(link);
      } else {
        setLink('https://github.com/jonatasJS');
        setLinkName('jonatasJS');
        console.log(link);
      }
    }, 5000);
  });

  return (
    <footer className={styles.Footer}>
        <p>
          Powered by
          <Link href={link}><a target="_blank">
            <span className={styles.Logo}>
              {linkName}
            </span>
          </a></Link>
        </p>
      </footer>
  );
}

export default Footer;