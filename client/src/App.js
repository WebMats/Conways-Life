import React from 'react';
import Main from './pages/main';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Conway's Game of Life</h1>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/description" render={() => {
            return <p>How I went about building the game</p>
          }} />
          <Redirect to="/" />
        </Switch>
    </div>
  );
}

export default App;
