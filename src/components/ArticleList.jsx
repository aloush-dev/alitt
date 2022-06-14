import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/articlelist.module.css";
import { getArticles } from "../utils/api";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const params = useParams();

  useEffect(() => {
    getArticles(params.topic).then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
  }, [params.topic]);

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <ul>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
};
