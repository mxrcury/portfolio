import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Creations from './components/Creations/Creations';

function App() {
  return (
    <div className="app-wrapper">
      <Header id='home-section' />
      <About id='about-section'/>
      <Creations/>
      <Navigation/>
    </div>
  );
}

export default App;
