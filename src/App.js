import React,  { Component, Suspense, lazy, useState } from 'react';
import './App.css';
import {HashRouter as Router , Route, Switch, Redirect} from 'react-router-dom';

const Header = lazy(() => import('./components/Header/header.js'));
const Home = lazy(() => import('./pages/Home/home.js'));
const About = lazy(() => import('./pages/About/about.js'));
function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div></div>}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/about" component={About}/>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
