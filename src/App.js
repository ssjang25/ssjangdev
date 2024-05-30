import './App.css';
import NavBar from "./components/NavBar";
import About from "./components/About"
import Projects from "./components/Projects"
import Intro from "./components/Intro"
import "./styles/Global.css"; //custom colors

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
