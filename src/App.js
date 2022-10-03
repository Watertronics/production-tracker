import './App.css';
import Container from './components/Container';
import Heritage from './components/Heritage';
import HeritageOrder from './components/HeritageOrder'
import Vanderbilt from './components/Vanderbilt';
import VanderbiltOrder from './components/VanderbiltOrder'
import Lakewood from './components/Lakewood'
import LakewoodOrder from './components/LakewoodOrder'
import NavBar from "./components/NavBar"
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/production-tracker">
        <NavBar />
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
        <Routes>
          <Route path="/2020676" element={<Heritage />} />
        </Routes>
        <Routes>
          <Route path="/2020676/OrderSheet" element={<HeritageOrder />} />
        </Routes>
        <Routes>
          <Route path="/2020583" element={<Vanderbilt />} />
        </Routes>
        <Routes>
          <Route path="/2020583/OrderSheet" element={<VanderbiltOrder />} />
        </Routes>
        <Routes>
          <Route path="/2020580" element={<Lakewood />} />
        </Routes>
        <Routes>
          <Route path="/2020580/OrderSheet" element={<LakewoodOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
