import Link from                      'next/link';
import Dynamic from                   'next/dynamic';
import { useCallback, useState } from 'react';
import styles from                    './styles.module.scss';

function Footer() {
  const [ link,      setLink ] =      useState(`${window?.location.origin}`);
  const [ linkName,  setLinkName ] =  useState<string>('jonatasJS');
  const [ isStarted, setIsStarted ] = useState<boolean>(false);
  const timeOut = Dynamic(() => {
    setTimeout(() => {
      setIsStarted(true);
      if(link == 'https://github.com/jonatasJS') {
        setLink('https://jonatas.app/');
        setLinkName('Next Rocket');
        return console.log(link);
        return {}
      } else {
        setLink('https://github.com/jonatasJS');
        setLinkName('jonatasJS');
        return console.log(link);
        return {}
      }
    }, 5000);
  });

  return (
    <footer onMouseOver={!isStarted ? timeOut : () => console.log('none')} className={styles.Footer}>
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