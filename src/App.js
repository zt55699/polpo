// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src="./pictures/banner.jpg" alt="banner" className="banner"></img>
        <img src="./pictures/polpo.JPG" alt="logo" className="polpo-logo"></img>
      </header>
</>
    
  );
}

export default App;
