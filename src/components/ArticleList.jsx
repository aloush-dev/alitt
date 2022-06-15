import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/articlelist.module.css";
import { getArticles } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Loading } from "./Loading";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useState();
  const [orderParams, setOrderParams] = useState("DESC");
  const [ascClicked, setAscClicked] = useState(false);
  const [descClicked, setDescClicked] = useState(true);

  let sortBy = [
    { value: "created_at", name: "Date" },
    { value: "comment_count", name: "Comments" },
    { value: "votes", name: "Hottest" },
  ];

  const params = useParams();

  const handleSort = (event) => {
    setSearchParams(event.target.value);
  };

  let ascButtonClicked = styles.orderbut;
  if (ascClicked) {
    ascButtonClicked = styles.buttonselected;
  }

  let descButtonClicked = styles.orderbut;
  if (descClicked) {
    descButtonClicked = styles.buttonselected;
  }

  const handleOrderAsc = (event) => {
    setAscClicked(!ascClicked);
    setDescClicked(!descClicked);
    setOrderParams(event.target.value);
  };

  const handleOrderDesc = (event) => {
    setDescClicked(!descClicked);
    setAscClicked(!ascClicked);
    setOrderParams(event.target.value);
  };

  useEffect(() => {
    getArticles(params.topic, searchParams, orderParams).then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
  }, [params.topic, searchParams, orderParams]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles.filterbar}>
        <div className={styles.orderbox}>
          <select value={searchParams} onChange={handleSort}>
            <option value="">Sort articles by</option>
            {sortBy.map((option, index) => {
              return (
                <option value={option.value} key={index}>
                  {option.name}
                </option>
              );
            })}
          </select>
          <button
            value="ASC"
            onClick={handleOrderAsc}
            className={ascButtonClicked}
          >
            ASC
          </button>
          <div className={styles.divider}></div>
          <button
            value="DESC"
            onClick={handleOrderDesc}
            className={descButtonClicked}
          >
            DESC
          </button>
        </div>
        {/* <button className={styles.postbut} >New Post</button> */}
      </div>
      <div>
        <ul>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </div>
    </>
  );
};
