import Home from "./pages/Home";
import TopicSelect from "./pages/TopicSelect";
import { Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import User from "./components/user/User";
import { useState } from "react";
import ArticleFull from "./pages/ArticleFull";

function App() {
	const [topic, setTopic] = useState({});
	const [topics, setTopics] = useState([]);
	const [article, setArticle] = useState({});

	return (
		<div className="App">
			<Header />
			<Nav />
			<User />
			<Routes>
				<Route path="/" element={<Home setArticle={setArticle} />} />
				<Route
					path="/topics"
					element={
						<TopicSelect
							topic={topic}
							setTopic={setTopic}
							topics={topics}
							setTopics={setTopics}
						/>
					}
				/>
				<Route
					path="/articles/:article_id"
					element={<ArticleFull article={article} setArticle={setArticle} />}
				/>
				<Route path="/articles" element={<Articles />} />
			</Routes>
		</div>
	);
}

export default App;
