import axios from "axios";

const usersApi = axios.create({
	baseURL: "https://news-app-nc-69.herokuapp.com/api",
});

export const getUsers = () => {
	return usersApi.get("/users").then(({ data }) => data);
};

export const getArticles = params => {
	return usersApi.get("/articles", { params }).then(({ data }) => {
		return data;
	});
};

export const getArticleById = article_id => {
	return usersApi.get(`/articles/${article_id}`).then(({ data }) => data);
};

export const patchArticle = (article_id, params) => {
	return usersApi
		.patch(`/articles/${article_id}`, params)
		.then(({ data }) => data);
};

export const getComments = article_id => {
	return usersApi
		.get(`articles/${article_id}/comments`)
		.then(({ data }) => data);
};

export const getTopics = () => {
	return usersApi.get("/topics").then(({ data }) => data);
};
