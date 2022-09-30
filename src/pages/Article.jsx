import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleFullCard from "../components/article/ArticleFullCard.jsx";
import { getArticleById } from "../utils/api.js";
import Loading from "../components/Loading";

function Article({user}) {
	const [article, setArticle] = useState({});
	const { article_id } = useParams();

	const [isLoading, setIsLoading] = useState(false);

	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getArticleById(article_id)
			.then(data => {
				setArticle(data.article);
				setIsLoading(false);
			})
			.catch(err => setIsError(true));
	}, []);

	if (isError) {
		return <p>Error: 404 article not found</p>;
	}
	return (
		<Loading isLoading={isLoading}>
			<div>
				<ArticleFullCard article={article} setArticle={setArticle} user={user}/>
			</div>
		</Loading>
	);
}

export default Article;
