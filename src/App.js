import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar'
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Details from './pages/Details/Details';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/details" element={<Details/>} />
        </Routes>


      </Router>


      
    </div>
  );
}

export default App;
