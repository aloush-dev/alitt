import styles from "../styles/articlevotestracker.module.css";
import { updateVotes } from "../utils/api";
import { AiFillFire } from "react-icons/ai";
import { useContext, useState } from "react";
import { userContext } from "../contexts/user";

export const ArticleVoteTracker = ({ votes, articleID }) => {
  const [currentVotes, setCurrentVotes] = useState(votes);

  const { user } = useContext(userContext);

  return (
    <div className={styles.votebanner}>
      {user.username ? (
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
          <AiFillFire />
        </button>
      ) : (
        ""
      )}

      <div className={styles.votes}>{currentVotes}</div>
    </div>
  );
};
