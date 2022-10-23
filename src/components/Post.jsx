import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/SamuckqaDev.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Samuel A. Tomimatu</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="May 11 at 12:32 am" dateTime="2022-10-22">
          Posted 1h ago
        </time>
      </header>
      <div className={styles.content}>
        <p>Heyy devs 👋</p>
        <p>I just uploaded my project to my portfolio </p>
        <p>
          👉 <a href="">samuel.desig/doctorcare</a>
        </p>
        <p>
          <a href="">#newproject</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>{" "}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea placeholder="Leave a feedback" />
        <button type="submit">Comment</button>
      </form>
    </article>
  );
}
