import React, { Component } from 'react';
import './App.css';
import {Home} from "./Home";
import './LearnMore.css';
import ArrowDown from "./Images/arrowDown.svg";
import Linkedin from "./Images/linkedin.svg";
import Mail from "./Images/mail.svg";
import ArrowUp from './Images/arrowUp.svg'

export class LearnMore extends Component{
    render(){
        console.log('Reee')
        return(
          <div className= 'App'>
              <div className="App-header">
                  <img src={Linkedin} className="Logo"
                       onClick={()=> window.open('https://www.linkedin.com/in/samuel-corcaud-a960b9136/')}/>
                  <a href ="mailto:samuel.corcaud@reseau.eseo.fr?Subject=Hello&body=Hello, I hope you like my portfolio" target="_top">
                      <img src={Mail} className="Logo"
                          // onClick={()=> window.open('mailto:someone@example.com?Subject=Hello%20again')} target="_top"
                      />
                  </a>
              </div>
              <div className="Main" id="back">
                  <button className="ButtonBack">
                      <img src={ArrowUp} className="ArrowUp" onClick={this.props.showHome}/>
                      <br/>
                      <span className="Text" id="textBack">Back</span>
                  </button>
              </div>
              <div className='Main'>
                  <button className="ButtonLearnMore" id="academicProject">
                      <span className="Text">Academic Project</span>
                      <br/>
                      <img src={ArrowDown} className="Arrow"/>
                      <br/>
                      <span className="TextAcademic">Premier projet</span>
                  </button>
                  <button className="ButtonLearnMore" id="central" >
                      <span className="Text">Experience</span>
                      <br/>
                      <img src={ArrowDown} className="Arrow"/>
                  </button>
                  <button className="ButtonLearnMore" id="contact">
                      <span className="Text">Contact</span>
                      <br/>
                      <img src={ArrowDown} className="Arrow"/>
                  </button>

              </div>
          </div>
        );
    }
}