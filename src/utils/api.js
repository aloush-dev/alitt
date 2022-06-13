import axios from "axios";

const alittApi = axios.create({
  baseURL: "https://alitt-app.herokuapp.com/api",
});

export const getArticles = () => {
  return alittApi
    .get("/articles")
    .then(({ data }) => {
      return data.article;
    })
    .catch((err) => {
      console.log(err);
    });
};
