import { useContext, useEffect, useState } from "react";
import { deleteComment, getComments, postComment } from "../utils/api";
import { CommentCard } from "./CommentCard";
import { PostComment } from "./PostComment";
import { userContext } from "../contexts/user";

export const CommentList = ({ articleID }) => {
  const [comments, setComments] = useState([]);
  const [commentToPost, setCommentToPost] = useState("");
  const [currentVotes, setCurrentVotes] = useState(0);

  const { user } = useContext(userContext);

  const convertDate = (date) => {
    let currDate = new Date(date);
    let milli = currDate.getTime();
    return milli;
  };

  function removeComment(commentID) {
    setComments((oldComments) => {
      return oldComments.filter((oldComment) => {
        return oldComment.comment_id !== commentID;
      });
    });
    deleteComment(commentID).then((data) => {
      if (!data.status === 204) {
        alert("Comment could not be deleted");
        setComments(comments);
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setComments((oldComments) => {
      let newComments = [
        {
          author: user.username,
          body: commentToPost,
          votes: 0,
          comment_id: 100000000000000000000000 + 1,
        },
        ...oldComments,
      ];
      return newComments;
    });
    postComment(articleID, commentToPost, user)
      .then(() => {
        setCommentToPost("");
      })
      .catch((err) => {
        if (err) {
          setComments((oldComments) => {
            let newComments = [...oldComments];
            newComments.shift();
            return newComments;
          });
        }
      });
  }

  useEffect(() => {
    getComments(articleID).then((data) => {
      let sortedArrComments = data.map((comment) => {
        comment.created_at = convertDate(comment.created_at);
        return comment;
      });
      sortedArrComments.sort((a, b) => {
        return b.created_at - a.created_at;
      });
      setComments(sortedArrComments);
    });
  }, [articleID, commentToPost]);

  return (
    <>
      {user.username ? (
        <PostComment
          handleSubmit={handleSubmit}
          commentToPost={commentToPost}
          setCommentToPost={setCommentToPost}
        />
      ) : (
        ""
      )}
      <ul>
        {comments.map((comment, index) => {
          return (
            <CommentCard
              currentVotes={currentVotes}
              setCurrentVotes={setCurrentVotes}
              removeComment={removeComment}
              key={index}
              comment={comment}
              comments={comments}
            />
          );
        })}
      </ul>
    </>
  );
};
