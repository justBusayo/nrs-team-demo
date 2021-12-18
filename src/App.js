import './App.css';
import Radio from './Radio';
import './App.css';
import './components/Dope.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js'
import Categories from './components/Categories';
import Stations from './components/Stations';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <h1>Nigeria Radio Station</h1>
      <p>Providing radio stations from Nigeria to everyone in the world!</p>
      <Menu />
      <Router>
        <Routes>
          {/* <Home />
          <Stations /> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/stations" exact element={<Stations />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
