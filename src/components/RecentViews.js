import styles from "../styles/recentViews.module.css";
import Image from "next/image";
import storypic2 from "../assets/storypic2.png";
import storypic3 from "../assets/storypic3.png";
import storypic4 from "../assets/storypic4.png";
export default function RecentViews() {
  return (
    <div className={styles.recentViewsContainer}>
      <div className={styles.bg}>
        <p>Recent likes on this profile</p>
      </div>
      <div className={styles.viewsBox}>
        <div className={styles.profile}>
          <Image
            src={storypic2}
            alt="profile"
            width={50}
            height={50}
            className={styles.pic}
          />
          <div className={styles.info}>
            <p>nature_photographer</p>
            <button className={styles.msgBtn}>View profile</button>{" "}
          </div>
        </div>
        <hr className={styles.rule}></hr>
        <div className={styles.profile}>
          <Image
            src={storypic3}
            alt="profile"
            width={50}
            height={50}
            className={styles.pic}
          />
          <div className={styles.info}>
            <p>nate_angels</p>
            <button className={styles.msgBtn}>View profile</button>{" "}
          </div>
        </div>
        <hr className={styles.rule}></hr>
        <div className={styles.profile}>
          <Image
            src={storypic4}
            alt="profile"
            width={50}
            height={50}
            className={styles.pic}
          />
          <div className={styles.info}>
            <p>tech_clg</p>
            <button className={styles.msgBtn}>View profile</button>
          </div>
        </div>
        <hr className={styles.rule}></hr>
      </div>
    </div>
  );
}
