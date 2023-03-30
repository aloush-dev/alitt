// import styles from "../styles/commentsvotetracker.module.css";
// import { AiFillFire } from "react-icons/ai";
// import { useEffect, useState } from "react";
// import { increaseCommentVote } from "../utils/api";

// export const CommentsVoteTracker = ({
//   comment,
//   comment_id,
//   setCurrentVotes,
//   currentVotes,
// }) => {

// setCurrentVotes(comment.votes)
//   // const [currentVotes, setCurrentVotes] = useState(comment.votes);
//   const [clicked, setClicked] = useState(false);

//   function increaseFire() {
//     setClicked(true);
//   }

//   useEffect(() => {
//     if (clicked) {
//       increaseCommentVote(comment_id).then((data) => {
//         if (!data.comment) {
//           alert("Couldn't Update Votes");
//         }
//         setCurrentVotes(data.comment.votes);
//       });
//     }
//   }, [clicked, comment_id]);

//   return (
//     <div className={styles.votebanner}>
//       <button
//         onClick={() => {
//           increaseFire(comment);
//         }}
//       >
//         <AiFillFire />
//       </button>
//       <div className={styles.votes}>{currentVotes}</div>
//     </div>
//   );
// };
