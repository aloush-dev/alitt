import styles from "../styles/commentcard.module.css";
import { userContext } from "../contexts/user";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";

export const CommentCard = ({ comments, comment, removeComment, currentVotes, setCurrentVotes }) => {
  const { user } = useContext(userContext);

  return comments.length === 0 ? (
    <div className={styles.nocomments}>
      <p> There are no comments to show</p>
    </div>
  ) : (
    <li className={styles.commentcard}>
      <div className={styles.topbanner}>
        <div className={styles.leftside}>
          {user.username === comment.author ? (
            <button
              onClick={() => {
                removeComment(comment.comment_id);
              }}
              className={styles.deletecomment}
            >
              <FaTrash />
            </button>
          ) : (
            ""
          )}
          <div className={styles.author}>{comment.author}</div>
        </div>
        {/* <CommentsVoteTracker
          currentVotes={currentVotes}
          setCurrentVotes={setCurrentVotes}
          comment={comment}
          comment_id={comment.comment_id}
        /> */}
      </div>

      <div className={styles.commentbody}>{comment.body}</div>
    </li>
  );
};
