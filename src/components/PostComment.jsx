import styles from "../styles/postcomment.module.css";
import { IoSend } from "react-icons/io5";
import { postComment } from "../utils/api";
import { useState } from "react";

export const PostComment = ({ articleID }) => {
  const [commentToPost, setCommentToPost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    postComment(articleID, commentToPost).then((data) => {
      if (data.body) {
        alert("comment posted");
      }
    });
    setCommentToPost("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Post comment
        <input
          required
          onChange={(event) => {
            setCommentToPost(event.target.value);
          }}
          value={commentToPost}
          type="text"
        ></input>
      </label>
      <button>
        <IoSend />
      </button>
    </form>
  );
};
