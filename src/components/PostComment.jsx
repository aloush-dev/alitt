import styles from "../styles/postcomment.module.css";
import { IoSend } from "react-icons/io5";

export const PostComment = ({
  handleSubmit,
  commentToPost,
  setCommentToPost,
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.postcomment}>
        <label>
          <div className={styles.label}>Post comment</div>
          <div className={styles.inputcontainer}>
            <textarea
              placeholder="Wow, what an amazing post!"
              className={styles.inputfield}
              required
              onChange={(event) => {
                setCommentToPost(event.target.value);
              }}
              value={commentToPost}
              type="text"
            ></textarea>
            <button className={styles.inputbutton}>
              <IoSend />
            </button>
          </div>
        </label>
      </div>
    </form>
  );
};
