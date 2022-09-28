import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://news-app-nc-69.herokuapp.com/api",
});

export const getUsers = () => {
  return usersApi.get("/users").then(({ data }) => data);
};

export const getArticles = () => {
  return usersApi.get("/articles").then(({ data }) => data);
};

export const getArticleById = (article_id) => {
  return usersApi.get(`/articles/${article_id}`).then(({ data }) => data);
};

export const getArticlesForTopic = (topic) => {
  if (topic) {
    return usersApi.get(`/articles?topic=${topic}`).then(({ data }) => data);
  }
  return getArticles();
};

export const getTopics = () => {
  return usersApi.get("/topics").then(({ data }) => data);
};

export const getComments = (article_id) => {
  return usersApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => data);
};
