import { useParams } from "react-router-dom";
import ArticleFullCard from "../components/article/ArticleFullCard.jsx";

function ArticleFull({ article, setArticle }) {
  const { article_id } = useParams();

  return (
    <div>
      <ArticleFullCard
        article_id={article_id}
        article={article}
        setArticle={setArticle}
      />
    </div>
  );
}

export default ArticleFull;
