import styles from "../styles/articlecard.module.css";
import { Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  return (
    <li className={styles.articlecard}>
      <h2 className={styles.articletitle}>{article.title}</h2>
      <div className={styles.topicauthor}>
        <div className={styles.articletopic}>
          <Link to={`/articles/${article.topic}`}>{article.topic}</Link>
        </div>
        <div className={styles.articleauthor}>Posted by : {article.author}</div>
      </div>

      <div className={styles.articlevotes}>{article.votes}</div>
      <div className={styles.articlecomments}>{article.comment_count}</div>
    </li>
  );
};
