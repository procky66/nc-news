import ArticleList from "../components/article/ArticleList";
import Header from "../components/Header";
import User from "../components/user/User";

function Home() {
	return (
		<div>
			<Header />
			<User />
			<ArticleList />
		</div>
	);
}

export default Home;