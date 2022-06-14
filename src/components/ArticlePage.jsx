import styles from "../styles/articlepage.module.css";
import { useState, useEffect } from "react";
import { getArticleByID } from "../utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const ArticlePage = () => {
  const [article, setArticle] = useState({});

  const params = useParams();

  useEffect(() => {
    getArticleByID(params.article_id).then((res) => {
      setArticle(res);
    });
  }, [params.article_id]);

  return (
    <div className={styles.article}>
      <h2>{article.title}</h2>
      <div className={styles.topicauthor}>
        <div className={styles.articletopic}>
          <Link to={`/articles/${article.topic}`}>{article.topic}</Link>
        </div>
        <div className={styles.articleauthor}>Posted by : {article.author}</div>
      </div>
      <p>{article.body}</p>
    </div>
  );
};
