import { useEffect, useState } from "react";
import { getComments, patchArticle } from "../../utils/api";
import { getDateString } from "../../utils/date";
import Comments from "../comment/Comments";
import AddComment from "../comment/AddComment";
import Loading from "../Loading";
import { useParams } from "react-router-dom";

function ArticleFullCard({ article, setArticle , user}) {
	const [comments, setComments] = useState([]);
	const { article_id } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [isAddingComment,setIsAddingComment] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getComments(article_id).then(data => {
			setComments(data.comments);
			setIsLoading(false);
		})
	}, []);

	const voteOnArticle = () => {
		setArticle(currentArticle => {
			return { ...currentArticle, votes: currentArticle.votes + 1 };
		});
		patchArticle(article.article_id, { inc_votes: 1 }).catch(err => {
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
					<p>
						Comments: {article.comment_count}{" "}
						<button onClick={() => setIsAddingComment(true)}>Add Comment</button>
					</p>
				</span>
				<p>{article.body}</p>
					<AddComment isAddingComment={isAddingComment} setIsAddingComment={setIsAddingComment} setComments={setComments} article={article} user={user}/>
				<Comments comments={comments} />
			</Loading>
		</article>
	);
}

export default ArticleFullCard;
