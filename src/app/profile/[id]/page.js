"use client";
import styles from "@/styles/profile.module.css";
import Sidebar from "@/components/Sidebar";
import ProfileDetail from "@/components/ProfileDetail";
import RecentViews from "@/components/RecentViews";
import { useEffect, useState } from "react";
import Post from "@/components/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import GridPost from "@/components/gridPost";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserData,
  fetchUserPhotos,
  selectUser,
  selectImages,
  selectLoaded,
  selectListView,
  toggleListView,
  toggleGridView,
} from "../../../redux/userSlice";

export default function Profile({ params }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const images = useSelector(selectImages);
  const loaded = useSelector(selectLoaded);
  const listView = useSelector(selectListView);

  useEffect(() => {
    console.log(user, "user");
    console.log(params.id, "params");
    dispatch(fetchUserData(params.id));
    dispatch(fetchUserPhotos(params.id));
  }, [dispatch, params.id]);

  const handleListView = () => {
    dispatch(toggleListView());
  };

  const handleGridView = () => {
    dispatch(toggleGridView());
  };

  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.profile}>
        <ProfileDetail
          username={user?.username}
          name={user?.name}
          bio={user?.bio}
          location={user?.location}
          followers={user?.followers_count}
          following={user?.following_count}
          download={user?.downloads}
          likes={user?.total_likes}
          profilePic={user?.profile_image?.small}
          totalPhotos={user?.total_photos}
        />
        <hr className={styles.rule}></hr>
        <div className={styles.photoView}>
          <button
            className={styles.gridView}
            onClick={handleGridView}
            style={{
              backgroundImage: !listView
                ? " linear-gradient(90deg, #ff9500 20%, #e77409 39%, #f04c1e 90%"
                : "linear-gradient(90deg, #ff9500 0%, #e77409 100%)",
            }}
          >
            Grid View
          </button>
          <button
            className={styles.listView}
            onClick={handleListView}
            style={{
              backgroundImage: listView
                ? " linear-gradient(90deg, #ff9500 20%, #e77409 39%, #f04c1e 90%"
                : "linear-gradient(90deg, #ff9500 0%, #e77409 100%)",
            }}
          >
            List View
          </button>
        </div>
        {listView ? (
          <div className={styles.infiniteScroll}>
            <InfiniteScroll
              style={{ height: "calc(100vh - 100px)", overflow: "auto" }}
              dataLength={images}
              hasMore={true}
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
        ) : (
          <div className={styles.infiniteScroll}>
            <div style={{ marginTop: "30px" }} className={styles.imageGrid}>
              {images ? (
                images.map((image, index) => (
                  <>
                    <GridPost
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
          </div>
        )}
      </div>

      <RecentViews />
    </main>
  );
}
