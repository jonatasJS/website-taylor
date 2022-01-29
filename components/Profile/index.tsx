import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.scss';

function Profile() {
  return (
    <div className={styles.Profile}>
      <Link href="/">
        <a>
          <Image className={styles.Photo} width="150" height="150" src="/images/Logo-Photo.jpg" alt="Taylor" />
        </a>
      </Link>
      <h1 className={styles.Title}>
        Iefutebol
      </h1>
    </div>
  );
}

export default Profile;