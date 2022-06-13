import { useEffect, useState } from "react";
import styles from "../styles/main.module.css";
import { getArticles } from "../utils/api";
import { ArticleCard } from "./ArticleCard";

export const Main = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
    });
  }, []);

  return (
    <ul>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
};
