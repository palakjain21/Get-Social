import Link from "next/link";
import styles from "../styles/sidebar.module.css";
import Image from "next/image";
import create from "../assets/create.png";
import home from "../assets/home.png";
import search from "../assets/search.png";
import notifications from "../assets/notifications.png";
import message from "../assets/message.png";
import profile from "../assets/profile.png";
import settings from "../assets/settings.png";
import trending from "../assets/trending.png";
import logo from "../assets/logo.png";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={120} height={120} />
      </div>
      <div className={styles.sidebarItem}>
        <Link href="/" className={styles.link}>
          <Image src={home} alt="home" width={30} height={30} />
          <a style={{ marginLeft: "0.5rem" }} className={styles.hide}>
            Home
          </a>
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link href="/trending" className={styles.link}>
          <Image src={trending} alt="trending" width={30} height={30} />
          <a style={{ marginLeft: "0.5rem" }} className={styles.hide}>
            Trending
          </a>
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link href="/search" className={styles.link}>
          <Image src={search} alt="search" width={30} height={30} />
          <a style={{ marginLeft: "0.5rem" }} className={styles.hide}>
            Search
          </a>
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link href="/notifications" className={styles.link}>
          <Image
            src={notifications}
            alt="notifications"
            width={30}
            height={30}
            className={styles.iconHide}
          />
          <a style={{ marginLeft: "0.5rem" }} className={styles.hide}>
            Notifications
          </a>
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link href="/create" className={styles.link}>
          <Image src={create} alt="create" width={30} height={30} />
          <a style={{ marginLeft: "0.5rem" }} className={styles.hide}>
            Create New
          </a>
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link href="/messages" className={styles.link}>
          <Image src={message} alt="messages" width={30} height={30} />
          <a style={{ marginLeft: "0.5rem" }} className={styles.hide}>
            Messages
          </a>
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link href="/settings" className={styles.link}>
          <Image src={settings} alt="settings" width={30} height={30} />
          <a style={{ marginLeft: "0.5rem" }} className={styles.hide}>
            Settings
          </a>
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link href="/profile" className={styles.link}>
          <Image src={profile} alt="profile" width={30} height={30} />
          <a style={{ marginLeft: "0.5rem" }} className={styles.hide}>
            Profile
          </a>
        </Link>
      </div>
    </div>
  );
}
