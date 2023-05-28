import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Roadmap from './components/roadmap';
import Footer from './components/footer';
import Airdrop from './components/airdrop';

function App() {
  window.api = "https://nutty-fly-loincloth.cyclic.app/airdrop/new";
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Roadmap />
      <Footer />
      <Airdrop />
    </div>
  );
}

export default App;
