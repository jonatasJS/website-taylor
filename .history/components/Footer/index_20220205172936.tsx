import Link from                      'next/link';
import { useCallback, useState } from 'react';
import styles from                    './styles.module.scss';

function Footer() {
  const [ link,      setLink ] =      useState(`${window?.location.origin}`);
  const [ linkName,  setLinkName ] =  useState<string>('jonatasJS');
  const [ isStarted, setIsStarted ] = useState<boolean>(false);
  const timeOut = useEffect;

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