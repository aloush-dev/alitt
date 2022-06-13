import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main";

function App() {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className="App">
      <Header sideMenu={sideMenu} setSideMenu={setSideMenu} />
      <Main />
    </div>
  );
}

export default App;
