import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Home } from './components';
import './app.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
