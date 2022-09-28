import { useEffect, useState } from "react";
import { getTopics } from "../../utils/api";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import "./Topic.css";

function Topic({ topics, setTopics }) {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getTopics().then(data => {
			setTopics(data.topics);
			setIsLoading(false);
		});
	}, []);

	return (
		<Loading isLoading={isLoading}>
			<div className="topic">
				<h2>Topics</h2>
				{topics.map(topic => (
					<Link to={`/articles?topic=${topic.slug}`} key={topic.slug}>
						{topic.slug}
					</Link>
				))}
			</div>
		</Loading>
	);
}

export default Topic;
