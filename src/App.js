import './App.css';
import Radio from './Radio';
import './App.css';
import './components/Dope.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js'
import Categories from './components/Categories';
import Stations from './components/Stations';
import Menu from './components/Menu';
import Favourite from './components/Favourite';
// import NowPlaying from './components/NowPlaying';

function App() {
  return (
    <div className="App">
      <h3 className="siteName">Nigeria Radio Station</h3>
      <p className="siteMotto">Providing radio stations from Nigeria to everyone in the world!</p>
      <Menu />
      <Router>
        <Routes>
          {/* <Home />
          <Stations /> */}
          <Route  path="/" exact element={<Home />}></Route>
          <Route  path="/stations" exact element={<Stations />}></Route>
          <Route  path="category" exact element={<Categories />}></Route>
          <Route  path="favourites" exact element={<Favourite />}></Route>

          
          {/* <Route path="/nowplaying" exact element={<NowPlaying />}></Route> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
