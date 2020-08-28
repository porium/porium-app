import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {LandingPage} from './pages/LandingPage';

const App = () => {
  return(
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
