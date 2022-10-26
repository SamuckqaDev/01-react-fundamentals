import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/SamuckqaDev.png"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jhosias Severino</strong>
              <time title="May 11 at 12:32 am" dateTime="2022-10-22">
                Posted 1h ago
              </time>
            </div>
            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Very good samuel, congratulations !</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Like<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
