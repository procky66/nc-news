import { getDateString } from "../../utils/date";
import "./CommentCard.css";

function CommentCard({ comment }) {
	return (
		<div className="comment_card">
			<p>{comment.body}</p>
			<span>
				<div>
					By {comment.author} on {getDateString(comment.created_at)} Votes: {comment.votes}
				</div>
			</span>
		</div>
	);
}

export default CommentCard;
