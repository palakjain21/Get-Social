import styles from "../styles/gridPost.module.css";
import Image from "next/image";
import like from "../assets/like.png";
import filledLike from "../assets/filledHeart.png";
import PostImage from "./PostImage";
export default function GridPost({
  url,
  key,
  likes,
  likedByUser,
  user,
  des,
  blur,
}) {
  return (
    <div className={styles.postContainer}>
      <div className={styles.image} key={key}>
        <PostImage url={url} blur={blur} width={200} height={200} />
      </div>
      <div className={styles.details}>
        <div className={styles.icons}>
          {likedByUser ? (
            <Image src={filledLike} alt="like" width={30} height={30} />
          ) : (
            <Image src={like} alt="like" width={30} height={30} />
          )}
        </div>
        <div className={styles.count}>
          <p>{likes} likes</p>
        </div>
      </div>
    </div>
  );
}
