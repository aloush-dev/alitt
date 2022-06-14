import axios from "axios";

const alittApi = axios.create({
  baseURL: "https://alitt-app.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return alittApi
    .get("/articles", { params: { topic } })
    .then(({ data }) => {
      return data.article;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticleByID = (article_id) => {
  return alittApi
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    });
};

export const getTopics = () => {
  return alittApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
