import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { TopicNav } from "./components/Header/TopicNav";
import { ArticleList } from "./components/ArticleList";
import { ArticlePage } from "./components/ArticlePage";

function App() {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className="App">
      <Header sideMenu={sideMenu} setSideMenu={setSideMenu} />
      <TopicNav />
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:topic" element={<ArticleList />} />
        <Route path='/articles/article/:article_id' element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
