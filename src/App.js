import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/index.navbar'
import Home from './pages/home'
import FooterSection from './Components/Footer/index.footer';
import { FooterDataLocation } from './Components/Footer/data.footer'
import MenuPage from './pages/menu';


function App() {
  return (
    <Router>
        <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/menu' component={MenuPage} />
      </Switch>
      <FooterSection {...FooterDataLocation}/>
    </Router>
  );
}

export default App;