import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from "./Home";
import './LearnMore.css';
import ArrowDown from "./Images/arrowDown.svg";

export class LearnMore extends Component{
    render(){
        return(
          <div className= 'App'>
              <div className='Main'>
                      <button className="ButtonLearnMore" id="bouton1">
                          <span>Learn more</span>
                          <br/>
                          <img src={ArrowDown} className="Arrow"/>
                      </button>
                      <button className="ButtonLearnMore" id="bouton2">
                          <span className="Text">Learn more</span>
                          <br/>
                          <img src={ArrowDown} className="Arrow"/>
                      </button>
                      <button className="ButtonLearnMore" id="bouton3">
                          <span>Learn more</span>
                          <br/>
                          <img src={ArrowDown} className="Arrow"/>
                      </button>
              </div>
          </div>
        );
    }
}