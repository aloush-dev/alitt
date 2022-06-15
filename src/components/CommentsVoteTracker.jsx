import styles from "../styles/commentsvotetracker.module.css";
import { AiFillFire } from "react-icons/ai";
import { useEffect, useState } from "react";
import { increaseCommentVote } from "../utils/api";

export const CommentsVoteTracker = ({ comment }) => {
    
  const [currentVotes, setCurrentVotes] = useState(comment.votes);

  return (
    <div className={styles.votebanner}>
      <button
        onClick={() => {
          setCurrentVotes((oldVotes) => {
            let newVotes = oldVotes++;
            return newVotes;
          });
          increaseCommentVote(comment.comment_id).then((data) => {
            if (!data.comment) {
              alert("Couldn't Update Votes");
            }
            setCurrentVotes(data.comment.votes);
          });
        }}
      >
        <AiFillFire />
      </button>
      <div className={styles.votes}>{currentVotes}</div>
    </div>
  );
};
