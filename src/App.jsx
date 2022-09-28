import Home from "./pages/Home";
import TopicSelect from "./pages/TopicSelect";
import { Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import Header from "./components/Header";
import Nav from "./components/Nav";
import User from "./components/user/User";

function App() {
	return (
		<div className="App">
			<Header />
			<Nav />
			<User />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/topic" element={<TopicSelect />} />
				<Route path="/articles" element={<Article />} />
			</Routes>
		</div>
	);
}

export default App;
