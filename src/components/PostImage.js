import { useState, useCallback } from "react";
import { Blurhash } from "react-blurhash";
import Image from "next/image";
import styles from "../styles/post.module.css";

export default function PostImage({ blur, url, width, height }) {
  const [imageLoad, setImageLoad] = useState(false);
  const afterLoad = useCallback(() => {
    setTimeout(() => {
      setImageLoad(true);
    }, 1000);
  }, []);
  return (
    <>
      {!imageLoad ? (
        <Blurhash
          hash={blur}
          width={width ? width : 500}
          height={height ? height : 500}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      ) : (
        <></>
      )}

      <Image
        src={url}
        alt="post"
        width={width ? (imageLoad ? width : 0) : imageLoad ? 500 : 0}
        height={height ? (imageLoad ? height : 0) : imageLoad ? 500 : 0}
        className={styles.post}
        onLoad={() => {
          setImageLoad(true);
          console.log("loaded");
        }}
        style={{ visibility: imageLoad ? "block" : "none" }}
      />
    </>
  );
}
