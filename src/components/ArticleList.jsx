import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

function ArticleList() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getArticles().then(data => {
			setArticles(data.articles);
		});
	}, []);

	return (
		<div className="articles">
            <ul>
			{articles.map(article => (
				<li><ArticleCard key={article.article_id} article={article} /></li>
			))}
            </ul>
		</div>
	);
}

export default ArticleList;
