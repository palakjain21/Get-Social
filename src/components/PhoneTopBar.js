import styles from "../styles/phoneTopBar.module.css";
import Image from "next/image";
import logo from "../assets/logo.png";
import notifications from "../assets/notifications.png";
export default function PhoneTopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.topLeft}>
        <Image src={logo} alt="logo" width={50} height={50} />
      </div>
      <div className={styles.topCenter}>
        <input
          placeholder="Search for friend, post or video"
          className={styles.searchInput}
        />
      </div>
      <div className={styles.topRight}>
        <div className={styles.topbarIconContainer}>
          <Image src={notifications} alt="search" width={30} height={30} />
        </div>
      </div>
    </div>
  );
}
