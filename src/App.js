import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/index.navbar'
import Home from './pages/home'
import FooterSection from './Components/Footer/index.footer';
import { FooterDataLocation } from './Components/Footer/data.footer'


function App() {
  return (
    <Router>
        <Navbar />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
      <FooterSection {...FooterDataLocation}/>
    </Router>
  );
}

export default App;