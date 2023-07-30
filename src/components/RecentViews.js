import styles from "../styles/recentViews.module.css";
import Image from "next/image";
import profilePic from "../assets/profilePic.jpg";
import send from "../assets/send.png";
export default function RecentViews() {
  return (
    <div className={styles.recentViewsContainer}>
      <div className={styles.bg}>
        <p>Recent views on your profile</p>
      </div>
      <div className={styles.viewsBox}>
        <div className={styles.profile}>
          <Image
            src={profilePic}
            alt="profile"
            width={50}
            height={50}
            className={styles.pic}
          />
          <div className={styles.info}>
            <p>Username</p>
            <button className={styles.msgBtn}>
              Message
              <span>
                <Image src={send} width={0} height={20} />
              </span>
            </button>{" "}
          </div>
        </div>
        <hr className={styles.rule}></hr>
        <div className={styles.profile}>
          <Image
            src={profilePic}
            alt="profile"
            width={50}
            height={50}
            className={styles.pic}
          />
          <div className={styles.info}>
            <p>Username</p>
            <button className={styles.msgBtn}>
              Message
              <span>
                <Image src={send} width={0} height={20} />
              </span>
            </button>{" "}
          </div>
        </div>
        <hr className={styles.rule}></hr>
        <div className={styles.profile}>
          <Image
            src={profilePic}
            alt="profile"
            width={50}
            height={50}
            className={styles.pic}
          />
          <div className={styles.info}>
            <p>Username</p>
            <button className={styles.msgBtn}>
              Message
              <span>
                <Image src={send} width={0} height={20} />
              </span>
            </button>
          </div>
        </div>
        <hr className={styles.rule}></hr>
      </div>
    </div>
  );
}
