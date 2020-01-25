import React from 'react';
import Report from './Report'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Use Case:</p>
          A retailer offers a rewards program to its customers, awarding points based on each recorded purchase. A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction. (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points). Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.
          <ul>
            <li>Use React JS</li>
            <li>Make up a data set to best demonstrate your solution</li>
            <li>Check solution into GitHub</li>
          </ul>
      </header>
      <Report />
    </div>
  );
}

export default App;
