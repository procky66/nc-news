import { useContext, useState } from "react";
import { postComment } from "../../utils/api";
import { UserContext } from "../contexts/User";
import "./AddComment.css";

function AddComment({
	isAddingComment,
	setIsAddingComment,
	setComments,
	article,
}) {
	const [comment, setComment] = useState("");
    const [user]=useContext(UserContext)

	const handleSubmit = e => {
		e.preventDefault();
		const params = {
			body: comment,
			author: user.username,
		};
		postComment(article.article_id, params).then(data => {
			setComments(curr => [data.comment, ...curr]);
		});
		setIsAddingComment(false);
	};

	const cancel = () => {
		setIsAddingComment(false);
	};

	if (!isAddingComment) return;

	return (
		<div>
			<h3>Add Comment</h3>
			<form onSubmit={e => handleSubmit(e)}>
				<textarea
					required
                    key="comment"
					id="comment"
					rows="4"
					cols="50"
					onChange={e => setComment(e.target.value)}
				/>
				<button id="submit">Post</button>{" "}
				<button type="button" id="cancel" onClick={() => cancel()}>
					Cancel
				</button>
			</form>
		</div>
	);
}

export default AddComment;
