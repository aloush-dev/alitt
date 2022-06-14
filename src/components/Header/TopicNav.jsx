import { useEffect, useState } from "react";
import styles from "../../styles/topicnav.module.css";
import { getTopics } from "../../utils/api";
import { Link } from "react-router-dom";

export const TopicNav = () => {
  const [topicNav, setTopicNav] = useState([]);

  useEffect(() => {
    getTopics().then((res) => {
      setTopicNav(res);
    });
  }, []);

  return (
    <div className={styles.nav}>
      <ul>
        {topicNav.map((topic) => {
          return (
            <div className={styles.topictitle} key={topic.slug}>
              <li>
                <Link to={`/articles/${topic.slug}`}>{topic.slug}</Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
