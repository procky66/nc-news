import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";
import Loading from "../Loading";

function ArticleList() {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getArticles().then(data => {
			setArticles(data.articles);
			setIsLoading(false);
		});
	}, []);

	return (
		<div className="articles">
			<Loading isLoading={isLoading}>
				<ul>
					{articles.map(article => (
						<li key={article.article_id}>
							<ArticleCard article={article} />
						</li>
					))}
				</ul>
			</Loading>
		</div>
	);
}

export default ArticleList;
