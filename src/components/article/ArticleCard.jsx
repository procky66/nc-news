import { Link } from "react-router-dom";
import "./ArticleCard.css";

function ArticleCard({ article }) {
	return (
		<article className="article_card">
			<Link to={`/articles/${article.article_id}`}>
				<h2>
					{article.title}
					<span className="nowrap"> - {article.author}</span>
				</h2>
				<p>{article.body}</p>
			</Link>
		</article>
	);
}

export default ArticleCard;
