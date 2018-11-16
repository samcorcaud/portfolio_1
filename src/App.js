import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from "./Home";
import {LearnMore} from "./LearnMore"
import './LearnMore.css';


class App extends Component {

    constructor(props){
        super(props);

        this.state = {currentWindow : "home"}
        this.showLearnMore = this.showLearnMore.bind(this)
        this.showHome = this.showHome.bind(this)
    }

    showLearnMore(){
        this.setState({currentWindow : "learnMore"})
    }

    showHome(){
      this.setState({currentWindow : "home"})
    }

  render() {
    console.log('Rerendering', this.state)
        if(this.state.currentWindow === 'home'){
          return <Home showLearnMore={this.showLearnMore}/> //On passe la fonction showLearnMore() de App.js a son enfan Home
        }else if(this.state.currentWindow === 'learnMore')
          return <LearnMore showHome={this.showHome}/>
  }
}

export default App;
