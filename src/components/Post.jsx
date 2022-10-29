import { format, formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post very good !"]);

  const published = format(publishedAt, "d LLLL 'at' HH:mm'h'");

  const [newCommentText, setNewCommentText] = useState("");

  const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  function doCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function doNewCommentChange(e) {
    setNewCommentText(e.target.comment);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={published} dateTime={publishedAt.toISOString()}>
          {publishedRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          }
          if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={doCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea
          name="comment"
          placeholder="Leave a feedback"
          value={newCommentText}
          onChange={doNewCommentChange}
        />
        <footer>
          <button type="submit">Post</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((commet) => (
          <Comment content={commet} />
        ))}
      </div>
    </article>
  );
}
