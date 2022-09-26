import ArticleList from "../components/ArticleList";
import Header from "../components/Header";
import User from "../components/User";

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