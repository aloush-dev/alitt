import styles from "../styles/articlecard.module.css";

export const ArticleCard = ({ article }) => {
  return (
    <li className={styles.articlecard}>
      <h2 className={styles.articlecardtitle}>{article.title}</h2>
      <div className={styles.articletopic}>{article.topic}</div>
      <div className={styles.articleauthor}>Posted by : {article.author}</div>
      <div className={styles.articlevotes}>{article.votes}</div>
      <div className={styles.articlecomments}>{article.comment_count}</div>
    </li>
  );
};
