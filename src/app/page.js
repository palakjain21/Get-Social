"use client";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import Story from "@/components/Story";
import Post from "@/components/Post";
import RightSidebar from "@/components/RightSidebar";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, selectImages, selectLoaded } from "../redux/imageSlice";
import PhoneTopBar from "@/components/PhoneTopBar";
export default function Home() {
  const dispatch = useDispatch();
  const images = useSelector(selectImages);
  const loaded = useSelector(selectLoaded);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.newsFeed}>
        <PhoneTopBar />
        <div className={styles.storyContainer}>
          <Story />
          <hr className={styles.rule}></hr>
        </div>
        <div className={styles.infiniteScroll}>
          <InfiniteScroll
            style={{
              height: "calc(100vh - 100px)",
              overflowY: "auto",
              overflowX: "hidden",
            }}
            dataLength={images}
            next={() => fetchImages(20)}
            hasMore={true}
            // loader={
            //   <div className={styles.loader}>
            //     {/* <Image src={like} alt="loading" /> */}
            //     <svg className={styles.spinner} viewBox="0 0 50 50">
            //       <circle
            //         className={styles.path}
            //         cx="25"
            //         cy="25"
            //         r="20"
            //         fill="none"
            //         stroke-width="5"
            //       ></circle>
            //     </svg>
            //   </div>
            // }
          >
            <div style={{ marginTop: "30px" }}>
              {loaded ? (
                images.map((image, index) => (
                  <>
                    <Post
                      url={image.urls.regular}
                      key={index}
                      likes={image.likes}
                      likedByUser={image.liked_by_user}
                      user={image.user}
                      des={image.alt_description}
                      blur={image.blur_hash}
                    />
                  </>
                ))
              ) : (
                <div className={styles.loader}>
                  <svg className={styles.spinner} viewBox="0 0 50 50">
                    <circle
                      className={styles.path}
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      stroke-width="5"
                    ></circle>
                  </svg>
                </div>
              )}
            </div>
          </InfiniteScroll>
        </div>
      </div>
      <RightSidebar />
    </main>
  );
}
