import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import Posts from "./components/formData/posts";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Main />
      <Posts />
      <Footer/>
    </div>
  );
}

export default App;
