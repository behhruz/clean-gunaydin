import "./App.css";
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import Posts from "./components/posts";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Posts />
    </div>
  );
}

export default App;
