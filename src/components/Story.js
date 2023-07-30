import styles from "../styles/story.module.css";
import Image from "next/image";
import story from "../assets/profilePic.jpg";
export default function Story() {
  return (
    <div className={styles.storyContainer}>
      <div className={styles.storyCarousel}>
        <div className={styles.story}>
          <Image
            src={story}
            alt="story"
            width={46}
            height={50}
            className={styles.image}
          />
        </div>
        <div className={styles.story}>
          <Image
            src={story}
            alt="story"
            width={46}
            height={50}
            className={styles.image}
          />{" "}
        </div>
        <div className={styles.story}>
          <Image
            src={story}
            alt="story"
            width={46}
            height={50}
            className={styles.image}
          />{" "}
        </div>
        <div className={styles.story}>
          <Image
            src={story}
            alt="story"
            width={46}
            height={50}
            className={styles.image}
          />{" "}
        </div>
        <div className={styles.story}>
          <Image
            src={story}
            alt="story"
            width={46}
            height={50}
            className={styles.image}
          />{" "}
        </div>
      </div>
    </div>
  );
}
