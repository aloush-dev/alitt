import { useEffect, useState } from "react";
import styles from "../styles/newarticle.module.css";
import { getTopics } from "../utils/api";
import { IoSend } from "react-icons/io5";

export const NewArticle = ({
  articleToPost,
  setArticleToPost,
  setArticleTopicToPost,
  handleSubmit,
  setArticleTitleToPost,
  articleTitleToPost,
  articleTopicToPost,
}) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
    });
  }, []);

  return (
    <div className={styles.newarticle}>
      <form onSubmit={handleSubmit}>
        <div className={styles.topbar}>
          <label>
            <div>title</div>
            <input
              required
              onChange={(event) => {
                setArticleTitleToPost(event.target.value);
              }}
              type="text"
              value={articleTitleToPost}
            ></input>
          </label>
          <div>
            <label>
              topic
              <select
                required
                value={articleTopicToPost}
                onChange={(event) => {
                  setArticleTopicToPost(event.target.value);
                }}
                className={styles.topicselector}
              >
                <option disabled></option>
                {topics.map((topic, index) => {
                  return <option key={index}>{topic.slug}</option>;
                })}
              </select>
            </label>
          </div>
        </div>

        <div className={styles.inputcontainer}>
          <textarea
            onChange={(event) => {
              setArticleToPost(event.target.value);
            }}
            placeholder="Lets make a great post..."
            className={styles.inputfield}
            required
            value={articleToPost}
            type="text"
          ></textarea>
          <button className={styles.inputbutton}>
            <IoSend />
          </button>
        </div>
      </form>
    </div>
  );
};
