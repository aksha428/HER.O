import React from 'react';
import './App.css';
import Home from './pages';
import SigninPage from './pages/signin';
import Research from './pages/research';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/research" component={Research} />
        <Route path="/signin" component={SigninPage}  />
      </Switch>
    </Router>
  );
}

export default App;
