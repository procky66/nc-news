import { useEffect, useState } from "react";
import { getArticleById } from "../../utils/api";
import { getDateString } from "../../utils/date";
import Loading from "../Loading";

function ArticleFullCard({ article_id, article, setArticle }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		getArticleById(article_id)
			.then(data => {
				setArticle(data.article);
				setIsLoading(false);
			})
			.catch(err => {
				setIsError({ err });
			});
	}, [article_id]);
	if (isError) {
		return <p>404: No Article found</p>;
	}
	return (
		<article className="article_card">
			<Loading isLoading={isLoading}>
				<h2>{article.title}</h2>
				<span>
					<p>
						By {article.author} on {getDateString(article.created_at)}
					</p>
					<p>Votes: {article.votes}</p>
					<p>Comments: {article.comment_count}</p>
				</span>
				<p>{article.body}</p>
			</Loading>
		</article>
	);
}

export default ArticleFullCard;
