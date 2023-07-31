import styles from "../styles/story.module.css";
import Image from "next/image";
import story from "../assets/profilePic.jpg";
import storypic2 from "../assets/storypic2.png";
import storypic3 from "../assets/storypic3.png";
import storypic4 from "../assets/storypic4.png";
import storypic5 from "../assets/storypic5.png";
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
            src={storypic2}
            alt="story"
            width={46}
            height={50}
            className={styles.image}
          />{" "}
        </div>
        <div className={styles.story}>
          <Image
            src={storypic3}
            alt="story"
            width={46}
            height={50}
            className={styles.image}
          />{" "}
        </div>
        <div className={styles.story}>
          <Image
            src={storypic4}
            alt="story"
            width={46}
            height={50}
            className={styles.image}
          />{" "}
        </div>
        <div className={styles.story}>
          <Image
            src={storypic5}
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
