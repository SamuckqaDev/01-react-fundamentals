import styles from "./SideBar.module.css";
import profileImg from "../assets/profile-img.jpg";

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100"
        alt=""
      />

      <div className={styles.profile}>
        <strong>Samuel Tomimatu</strong>
        <span>FullStack developer</span>
      </div>

      <footer>
        <a href="#">Edit profile</a>
      </footer>
    </aside>
  );
}
