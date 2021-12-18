import logo from './logo.svg';
import './App.css';
import './components/Dope.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js'
import Categories from './components/Categories';

function App() {
  return (
    <div className='row'>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;