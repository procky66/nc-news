import { useEffect, useState } from "react";
import { getComments, patchArticle } from "../../utils/api";
import { getDateString } from "../../utils/date";
import Comments from "../comment/Comments";
import Loading from "../Loading";

function ArticleFullCard({ article, setArticle }) {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getComments(article.article_id).then(data => {
			setComments(data.comments);
			setIsLoading(false);
		});
	}, []);

	const voteOnArticle = () => {
		setArticle(currentArticle => {
			return { ...currentArticle, votes: currentArticle.votes + 1 };
		});
		patchArticle(article.article_id, { inc_votes: 1 })
			.catch(err => {
				setArticle(currentArticle => {
					return { ...currentArticle, votes: currentArticle.votes - 1 };
				});
			});
	};
	return (
		<article className="article_card">
			<Loading isLoading={isLoading}>
				<h2>{article.title}</h2>
				<span>
					<p>
						By {article.author} on {getDateString(article.created_at)}
					</p>
					<div>
						<p>Votes: {article.votes}</p>
						<button id="vote" onClick={() => voteOnArticle()}>
							Vote
						</button>
					</div>
					<p>Comments: {article.comment_count}</p>
				</span>
				<p>{article.body}</p>
				<Comments comments={comments} />
			</Loading>
		</article>
	);
}

export default ArticleFullCard;
