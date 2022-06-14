import styles from "../styles/articlecard.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaComments } from "react-icons/fa";

export const ArticleCard = ({ article }) => {
  let navigate = useNavigate();
  return (
    <Link to={`/articles/article/${article.article_id}`}>
      <li className={styles.articlecard}>
        <h2 className={styles.articletitle}>{article.title}</h2>
        <div className={styles.topicauthor}>
          <button
            className={styles.articletopic}
            onClick={() => {
              navigate = `/articles/${article.topic}}`;
            }}
          >
            {article.topic}
          </button>

          <div className={styles.articleauthor}>
            Posted by : {article.author}
          </div>
        </div>

        <div className={styles.articlevotes}>{article.votes}</div>
        <div className={styles.articlecomments}>
          <div className={styles.commentsicon}>
            <FaComments />
          </div>
          {article.comment_count}
        </div>
      </li>
    </Link>
  );
};
