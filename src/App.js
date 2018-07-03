import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Logo from './components/Logo';
import Home from './components/Home';
import Game from './components/Game';
import Project from './components/Project';
import Asset from './components/Asset';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <h2 className="text-center mb-4"> Marker Mauro - Indie Developer </h2>
        <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/assets" component={Asset} />
            <Route exact path="/games" component={Game} />
            <Route exact path="/projects" component={Project} />
          </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
