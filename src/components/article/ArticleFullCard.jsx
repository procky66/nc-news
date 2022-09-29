import { getDateString } from "../../utils/date";

function ArticleFullCard({article}) {
	return (
		<article className="article_card">
				<h2>{article.title}</h2>
				<span>
					<p>
						By {article.author} on {getDateString(article.created_at)}
					</p>
					<p>Votes: {article.votes}</p>
					<p>Comments: {article.comment_count}</p>
				</span>
				<p>{article.body}</p>
		</article>
	);
}

export default ArticleFullCard;
