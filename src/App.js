import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { TopicNav } from "./components/Header/TopicNav";
import { ArticleList } from "./components/ArticleList";
import { ArticlePage } from "./components/ArticlePage";
import { userContext } from "./contexts/user";
import { Login } from "./components/Login";
import { CreateUser } from "./components/CreateUser";

function App() {
  const [user, setUser] = useState({});
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header sideMenu={sideMenu} setSideMenu={setSideMenu} />
        <TopicNav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:topic" element={<ArticleList />} />
          <Route
            path="/articles/article/:article_id"
            element={<ArticlePage />}
          />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
