import ArticleList from "../components/article/ArticleList";
import Header from "../components/Header";
import Nav from "../components/Nav";
import User from "../components/user/User";

function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <User />
      <ArticleList />
    </div>
  );
}

export default Home;
