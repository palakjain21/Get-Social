import styles from "../styles/rightSidebar.module.css";
import Image from "next/image";
import profilePic from "../assets/profilePic.jpg";
export default function RightSidebar() {
  return (
    <div className={styles.rightSidebarContainer}>
      <div className={styles.bg}></div>
      <div className={styles.profile}>
        <Image
          src={profilePic}
          alt="profile"
          width={50}
          height={50}
          className={styles.profilePic}
        />
      </div>
      <div className={styles.profileDetail}>
        <p className={styles.switch}>
          <b>Switch account</b>
        </p>
        <p>
          <b>Tech_Diva</b>
        </p>
        <p>Software Developer</p>
      </div>
      <div className={styles.viewsAndLikes}>
        <div className={styles.views}>
          <p className={styles.left}>Total views on profile</p>
          <p className={styles.right}>200</p>
        </div>
        <div className={styles.views}>
          <p className={styles.left}>Total likes on profile</p>
          <p className={styles.right}>168</p>
        </div>
      </div>
    </div>
  );
}
