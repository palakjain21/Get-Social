"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import Story from "@/components/Story";
import Post from "@/components/Post";
import RightSidebar from "@/components/RightSidebar";
import ProfileDetail from "@/components/ProfileDetail";
import RecentViews from "@/components/RecentViews";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import loader from "@/assets/loader.png";
import like from "@/assets/like.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, selectImages, selectLoaded } from "../redux/imageSlice";
import PhoneTopBar from "@/components/PhoneTopBar";
// export default function Home() {
//   const [images, setImages] = useState([]);
//   const [loaded, setIsLoaded] = useState(false);
//   const fetchImages = (count = 10) => {
//     const apiRoot = "https://api.unsplash.com";
//     const accessKey = "Vdo7TpSQRd67RLo5ZKLwA6ZegaWJFkJRcbRnz52cNCM";

//     axios
//       .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
//       .then((res) => {
//         console.log(res.data[0].urls);
//         setImages([...images, ...res.data]);
//         setIsLoaded(true);

//         console.log(images);
//       });
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

export default function Home() {
  const dispatch = useDispatch();
  const images = useSelector(selectImages);
  const loaded = useSelector(selectLoaded);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  console.log(windowSize[0]);

  // The rest of your component code remains the same
  // Instead of using 'images' and 'loaded' states directly,
  // use the Redux store values 'images' and 'loaded' from useSelector.

  return (
    <main className={styles.main}>
      <Sidebar />

      <div className={styles.newsFeed}>
        {windowSize[0] > 500 ? null : <PhoneTopBar />}
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
                  {/* <Image src={like} alt="loading" /> */}
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
      {/* <ProfileDetail /> */}
      <RightSidebar />
      {/* <RecentViews /> */}
    </main>
  );
}
