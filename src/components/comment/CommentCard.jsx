import { getDateString } from "../../utils/date";
import "./CommentCard.css";

function CommentCard({ comment }) {
	return (
		<div className="comment_card">
			<p>{comment.body}</p>
			<span>
				<p>
					By {comment.author} on {getDateString(comment.created_at)}<p>Votes: {comment.votes}</p>
				</p>
			</span>
		</div>
	);
}

export default CommentCard;
