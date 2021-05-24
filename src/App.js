// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';

import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className='root'>
    <Router>
      <Navbar totalItems='2'/>
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src="./pictures/banner.jpg" alt="banner" className="banner"></img>
        <div>
          <Products />
        </div>
        {/* <img src="./pictures/polpo.JPG" alt="logo" className="polpo-logo"></img> */}
      </header>
  </div>
    
  );
}

export default App;
