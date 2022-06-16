import { useEffect, useState } from "react";
import styles from "../styles/newarticle.module.css";
import { getTopics } from "../utils/api";
import { IoSend } from "react-icons/io5";

export const NewArticle = () => {
  const [topics, setTopics] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }

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
            <input type="text"></input>
          </label>
          <div>
            <label>topic
              <select className={styles.topicselector}>
                {topics.map((topic, index) => {
                  return <option key={index}>{topic.slug}</option>;
                })}
              </select>
            </label>
          </div>
        </div>

        <div className={styles.inputcontainer}>
          <textarea
            placeholder="Lets make a great post..."
            className={styles.inputfield}
            required
            value=""
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
