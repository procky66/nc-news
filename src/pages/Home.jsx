import ArticleList from "../components/article/ArticleList";

function Home(setArticle) {
  return (
    <div>
      <ArticleList setArticle={setArticle}/>
    </div>
  );
}

export default Home;
