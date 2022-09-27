import { useLocation } from "react-router-dom";
import ArticleList from "../components/article/ArticleList";
import Header from "../components/Header";
import Nav from "../components/Nav";
import User from "../components/user/User";

function Article() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const topicSlug = query.get("topic") || "";

  return (
    <div>
      <Header />
      <Nav />
      <User />
      <ArticleList topicSlug={topicSlug} />
    </div>
  );
}

export default Article;
