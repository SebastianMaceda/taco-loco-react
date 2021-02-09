import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/index.navbar'
import Home from './pages/home'


function App() {
  return (
    <Router>
        <Navbar />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;