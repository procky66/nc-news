import { useState } from "react";
import Topic from "../components/topic/Topic";

function TopicSelect() {
  const [topic, setTopic] = useState({});
  const [topics, setTopics] = useState([]);
  return (
    <div>
      <Topic
        topic={topic}
        setTopic={setTopic}
        topics={topics}
        setTopics={setTopics}
      />
    </div>
  );
}

export default TopicSelect;
