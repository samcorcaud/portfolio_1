import React, { Component } from 'react';
import './App.css';
import {Home} from "./Home";
import './LearnMore.css';
import ArrowDown from "./Images/arrowDown.svg";
import Linkedin from "./Images/linkedin.svg";
import Mail from "./Images/mail.svg";

export class LearnMore extends Component{
    render(){
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
                  <button className="ButtonLearnMore" id="buttonBack" >
                      <img src={ArrowDown} className="Arrow"/>

                      <span className="Text" id="textBack">Back</span>
                      {/*Laisser le bouton avec Back dessus avec la fleche transparence 100% puis lorsque la souris passe*/}
                      {/*dessus texte disparait et fleche apparait position relative ou bloqué des deux elements div*/}
                  </button>
              </div>
              <div className='Main'>

                  <button className="ButtonLearnMore" id="academicProject">
                      <span className="Text">Academic Project</span>
                      <br/>
                      <img src={ArrowDown} className="Arrow"/>
                  </button>
                  <button className="ButtonLearnMore" >
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