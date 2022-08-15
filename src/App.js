import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="app-wrapper">
      <Header id='home-section' />
      <About id='about-section'/>
      <Navigation/>
    </div>
  );
}

export default App;
