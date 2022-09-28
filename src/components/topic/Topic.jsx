import { useEffect } from "react";
import { getTopics } from "../../utils/api";
import { Link } from "react-router-dom";
import "./Topic.css";

function Topic({ topic, setTopic, topics, setTopics }) {
  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data.topics);
    });
  });

  return (
    <div className="topic">
      <h2>Topics</h2>
      {topics.map((topic) => (
        <Link to={`/articles?topic=${topic.slug}`}>{topic.slug}</Link>
      ))}
    </div>
  );
}

export default Topic;
