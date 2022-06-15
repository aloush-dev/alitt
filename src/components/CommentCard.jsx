import styles from "../styles/commentcard.module.css";
import { CommentsVoteTracker } from "./CommentsVoteTracker";

export const CommentCard = ({comments, comment }) => {

  return comments.length === 0 ? (
    <div className={styles.nocomments}>
      <p> There are no comments to show</p>
    </div>
  ) : (
    <li className={styles.commentcard}>
      <div className={styles.topbanner}>
        <div className={styles.author}>{comment.author}</div>
        <CommentsVoteTracker comment={comment}/>
      </div>

      <div className={styles.commentbody}>{comment.body}</div>
    </li>
  );
};
