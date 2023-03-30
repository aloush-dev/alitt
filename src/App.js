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
import { ErrorPage } from "./components/ErrorPage";

function App() {
  const [user, setUser] = useState({
    username: "aloush",
    name: "Ali",
    avatar_url:
      "https://cdn.chesterzoo.org/2019/04/2017-Sumatran-tiger-Kirana-in-the-zoo-square.jpg",
  });
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header
          className="header"
          sideMenu={sideMenu}
          setSideMenu={setSideMenu}
        />
        <TopicNav className="topicnav" />
        {/* <DeskSideMenu className="menu" /> */}
        <div className="main">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/articles/:topic" element={<ArticleList />} />
            <Route
              path="/articles/article/:article_id"
              element={<ArticlePage />}
            />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </userContext.Provider>
  );
}

export default App;
