import Home from "./pages/Home";
import TopicSelect from "./pages/TopicSelect";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Article from "./pages/Article";

function App() {
  const [topic, setTopic] = useState({});
  const [topics, setTopics] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/topic"
          element={
            <TopicSelect
              topic={topic}
              setTopic={setTopic}
              topics={topics}
              setTopics={setTopics}
            />
          }
        />
        <Route path="/articles" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
