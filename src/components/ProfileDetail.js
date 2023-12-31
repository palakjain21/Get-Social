import styles from "../styles/profileDetail.module.css";
import Image from "next/image";
import send from "../assets/send.png";
export default function ProfileDetail({
  username,
  name,
  bio,
  followers,
  following,
  profilePic,
  totalPhotos,
  location,
}) {
  console.log(username);
  return (
    <div className={styles.profileDetailConatiner}>
      <div className={styles.profilePic}>
        <Image
          src={profilePic}
          alt="profile-pic"
          width={200}
          height={200}
          className={styles.pic}
        />
      </div>
      <div className={styles.details}>
        <h2>
          <b>{username}</b>
        </h2>
        <p>{name}</p>
        <p>{bio}</p>
        <p>📍 {location}</p>
        <div className={styles.count}>
          <p>{totalPhotos} posts</p>
          <p>{followers} followers</p>
          <p>{following} following</p>
        </div>
        <div className={styles.btnGrp}>
          <button className={styles.followButton}>Follow</button>
          <button className={styles.msgButton}>
            Message
            <span>
              <Image src={send} width={25} height={20} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
