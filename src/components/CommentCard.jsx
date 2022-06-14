import { useEffect, useState } from "react";
import styles from "../styles/commentcard.module.css";
import { getComments } from "../utils/api";

export const CommentCard = ({ articleID }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(articleID).then((data) => {
      setComments(data);
    });
  });

  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li className={styles.commentcard} key={comment.comment_id}>
            <div className={styles.topbanner}>
              <div className={styles.author}>{comment.author}</div>
              <div className={styles.votes}>{comment.votes}</div>
            </div>

            <div className={styles.commentbody}>{comment.body}</div>
          </li>
        );
      })}
    </ul>
  );
};
