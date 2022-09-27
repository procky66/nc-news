import "./ArticleCard.css"

function ArticleCard({article}) {
	return (
		<article className="article_card">
			<h2>
				{article.title}
				<span className="nowrap"> - {article.author}</span>
			</h2>
			<p>{article.body}</p>
		</article>
	);
}

export default ArticleCard;
