import { useEffect, useState } from "react";
import { getComments, postComment } from "../utils/api";
import { CommentCard } from "./CommentCard";
import { PostComment } from "./PostComment";

export const CommentList = ({ articleID }) => {
  const [comments, setComments] = useState([]);
  const [commentToPost, setCommentToPost] = useState("");

  const convertDate = (date) => {
    let currDate = new Date(date);
    let milli = currDate.getTime();
    return milli;
  };

  function handleSubmit(event) {
    event.preventDefault();
    setComments((oldComments) => {
      let newComments = [...oldComments];
      newComments.unshift({
        author: "jessjelly",
        body: commentToPost,
      });
      return newComments;
    });
    postComment(articleID, commentToPost)
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
        return a.created_at + b.created_at;
      });
      setComments(sortedArrComments);
    });
  }, [articleID, commentToPost]);

  console.log("HELLOBOYS");

  return (
    <>
      <PostComment
        handleSubmit={handleSubmit}
        commentToPost={commentToPost}
        setCommentToPost={setCommentToPost}
        comments={comments}
        setComments={setComments}
        articleID={articleID}
      />
      <ul>
        {comments.map((comment, index) => {
          return (
            <CommentCard key={index} comment={comment} comments={comments} />
          );
        })}
      </ul>
    </>
  );
};
