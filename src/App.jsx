import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import User from "./components/user/User";
import Article from "./pages/Article";
import Topic from "./pages/Topic";

function App() {

	return (
		<div className="App">
			<Header />
			<Nav />
			<User/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/articles" element={<Home />} />
				<Route path="/topics" element={<Topic />} />
				<Route path="/articles/:article_id" element={<Article/>} />
			</Routes>
		</div>
	);
}

export default App;
