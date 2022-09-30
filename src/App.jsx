import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import User from "./components/user/User";
import Article from "./pages/Article";
import Topic from "./pages/Topic";
import { useState } from "react";

function App() {
	const [user, setUser] = useState({});

	return (
		<div className="App">
			<Header />
			<Nav />
			<User user={user} setUser={setUser}/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/articles" element={<Home />} />
				<Route path="/topics" element={<Topic />} />
				<Route path="/articles/:article_id" element={<Article user={user} setUser={setUser}/>} />
			</Routes>
		</div>
	);
}

export default App;
