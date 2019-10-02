import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
  <Router>
    <div className="App">
        <h1>Fibonacci Calculator 1</h1>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      <div>
        <Route exact path = "/" component = {Fib} />
        <Route path = "/otherpage" component = {OtherPage} />
      </div>
    </div>
  </Router>
  );
}

export default App;
