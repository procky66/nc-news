//import ArticleList from "../components/article/ArticleList";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Topic from "../components/topic/Topic";
import User from "../components/user/User";

function TopicSelect({ topic, setTopic, topics, setTopics }) {
  return (
    <div>
      <Header />
      <Nav />
      <User />
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
