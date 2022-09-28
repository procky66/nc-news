import { useEffect, useState } from "react";
import { getArticlesForTopic } from "../../utils/api";
import ArticleCard from "./ArticleCard";
import Loading from "../Loading";

function ArticleList({ topicSlug , setArticle}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticlesForTopic(topicSlug).then((data) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, [topicSlug]);

  let banner = "";
  if (topicSlug) banner = `Articles for topic: ${topicSlug}`;

  return (
    <div className="articles">
      <Loading isLoading={isLoading}>
        <h3>{banner}</h3>
        <ul>
          {articles.map((article) => (
            <li key={article.article_id}>
              <ArticleCard article={article} setArticle={setArticle}/>
            </li>
          ))}
        </ul>
      </Loading>
    </div>
  );
}

export default ArticleList;
