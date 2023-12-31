import styles from "../styles/post.module.css";
import Image from "next/legacy/image";
import more from "../assets/more.png";
import like from "../assets/like.png";
import filledLike from "../assets/filledHeart.png";
import comment from "../assets/comment.png";
import download from "../assets/download.png";
import { useRouter } from "next/navigation";
import PostImage from "./PostImage";
export default function Post({
  url,
  key,
  likes,
  likedByUser,
  user,
  des,
  blur,
  width,
  height,
}) {
  const router = useRouter();
  console.log(blur, "blur");

  return (
    <div className={styles.postContainer}>
      <div className={styles.userDetailAndMore}>
        <div className={styles.userImage}>
          <Image
            src={user?.profile_image.small}
            alt="profile"
            width={50}
            height={50}
            style={{ borderRadius: "10px" }}
          />
        </div>

        <div
          className={styles.userDetails}
          onClick={() => router.push(`/profile/${user.username}`)}
        >
          <p>{user?.username}</p>
          <p>{user?.location ? user.location : ""}</p>
        </div>
        <div className={styles.more}>
          <Image src={more} alt="more" width={30} height={30} />
        </div>
      </div>
      <div className={styles.image} key={key}>
        <PostImage blur={blur} url={url} width={width} height={height} />
      </div>
      <div className={styles.details}>
        <div className={styles.icons}>
          {likedByUser ? (
            <Image src={filledLike} alt="like" width={30} height={30} />
          ) : (
            <Image src={like} alt="like" width={30} height={30} />
          )}
          <Image src={comment} alt="comment" width={30} height={30} />
          <Image src={download} alt="download" width={30} height={30} />
        </div>
        <div className={styles.count}>
          <p>{likes} likes</p>
          <p>
            <b>{user?.username}</b> {des}
          </p>
        </div>
      </div>
    </div>
  );
}
