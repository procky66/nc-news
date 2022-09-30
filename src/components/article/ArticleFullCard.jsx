import { patchArticle } from "../../utils/api";
import { getDateString } from "../../utils/date";

function ArticleFullCard({ article, setArticle }) {

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
		</article>
	);
}

export default ArticleFullCard;
