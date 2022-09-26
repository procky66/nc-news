import './App.css';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Header />
      <User />
      <ArticleList />
    </div>
  );
}

export default App;
