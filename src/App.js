import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from "./Home";
import {LearnMore} from "./LearnMore"
import './LearnMore.css';

class App extends Component {
  render() {
    return (
      <div>
        <LearnMore/>
      </div>
    );
  }
}

export default App;
