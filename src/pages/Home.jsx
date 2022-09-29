import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import Loading from "../components/Loading";
import ArticleCard from "../components/article/ArticleCard";
import { useSearchParams } from "react-router-dom";

function Home() {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchParams] = useSearchParams();

	const topic = { topic: searchParams.get("topic") };

	useEffect(() => {
		setIsLoading(true);
		getArticles(topic).then(data => {
			setArticles(data.articles);
      setIsLoading(false);
		});
	}, []);

	let banner = "";
	if (topic.topic) banner = `Articles for topic: ${topic.topic}`;

	return (
		<div className="articles">
			<Loading isLoading={isLoading}>
				<h3>{banner}</h3>
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

export default Home;
