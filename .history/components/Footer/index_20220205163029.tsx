import Link from                      'next/link';
import { useCallback, useState } from 'react';
import styles from                    './styles.module.scss';

function Footer() {
  const [ link,      setLink ] =      useState('https://github.com/jonatasJS');
  const [ linkName,  setLinkName ] =  useState<string>('jonatasJS');
  const [ isStarted, setIsStarted ] = useState<boolean>(false);
  const timeOut = () => setTimeout(() => {
    setIsStarted(true);
    if(link == 'https://github.com/jonatasJS') {
      setLink('https://jonatas.app/');
      setLinkName('Next Rocket');
      console.log(link);
    }

    if (link == 'https://jonatas.app/') {
      setLink('https://github.com/jonatasJS');
      setLinkName('jonatasJS');
      console.log(link);
    }

  }, 5000);

  return (
    <footer className={styles.Footer}>
        <p>
          Powered by
          <Link href={link}><a target="_blank">
            <span onMouseOver={!isStarted ? timeOut : () => console.log('none')} className={styles.Logo}>
              {linkName}
            </span>
          </a></Link>
        </p>
      </footer>
  );
}

export default Footer;