import CommentCard from "./CommentCard";

function Comments({ comments }) {
	return (
		<div className="comments">
			<h3>Comments</h3>
			<ul>
				{comments.map(comment => (
					<li key={comment.comment_id}>
						<CommentCard comment={comment} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default Comments;
