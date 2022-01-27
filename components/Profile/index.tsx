import Image from "next/image";
import styles from '../../styles/Home.module.scss';

function Profile() {
  return (
    <div className={styles.Profile}>
      <Image className={styles.Photo} width="150" height="150" src="/images/taylor-photo.jpg" alt="Taylor" />
      <h1 className={styles.Title}>
        Taylor Mendes
      </h1>
    </div>
  );
}

export default Profile;