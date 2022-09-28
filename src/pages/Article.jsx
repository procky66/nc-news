import { useSearchParams } from "react-router-dom";
import ArticleList from "../components/article/ArticleList";
function Article() {
  const [searchParams] = useSearchParams();

  const topicSlug = searchParams.get("topic") || "";

  return (
    <div>
      <ArticleList topicSlug={topicSlug} />
    </div>
  );
}

export default Article;
