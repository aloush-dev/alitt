import styles from "../styles/articlevotestracker.module.css";
import { updateVotes } from "../utils/api";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { useState } from "react";

export const ArticleVoteTracker = ({ votes, articleID }) => {
  const [currentVotes, setCurrentVotes] = useState(votes);

  return (
    <div className={styles.votebanner}>
      <button
        onClick={() => {
          updateVotes(articleID).then((data) => {
            if (!data) {
              alert("Couldn't Update Votes");
            }
            setCurrentVotes(data);
          });
        }}
      >
        <BsFillHandThumbsUpFill />
      </button>
      <div className={styles.votes}>{currentVotes}</div>
    </div>
  );
};
