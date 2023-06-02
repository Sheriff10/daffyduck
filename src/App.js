import logo from './logo.svg';
import './App.css';
import './css/style.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Influencers from './components/influencers';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  window.api = "https://nutty-fly-loincloth.cyclic.app/airdrop/new";
  window.influencerApi = "https://nutty-fly-loincloth.cyclic.app/influencers";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/influencer" element={<Influencers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
