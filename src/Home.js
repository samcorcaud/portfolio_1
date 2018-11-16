import React, { Component } from 'react';
import './App.css';
import Linkedin from './Images/linkedin.svg';
import Mail from './Images/mail.svg';
import ArrowDown from './Images/arrowDown.svg';



export class Home extends Component {

    render(){
        return (
           <div className="App">
               <div className="App-header">
                   <img src={Linkedin} className="Logo"
                        onClick={()=> window.open('https://www.linkedin.com/in/samuel-corcaud-a960b9136/')}/>
                   <a href ="mailto:samuel.corcaud@reseau.eseo.fr?Subject=Hello&body=Hello, I hope you like my portfolio" target="_top">
                   <img src={Mail} className="Logo"
                       // onClick={()=> window.open('mailto:someone@example.com?Subject=Hello%20again')} target="_top"
                            />
                   </a>
               </div>
               <div className="Home">
                   <div className="Titre">
                       <span>Hello, I'm Samuel</span>
                   </div>
                   <button className="Button">
                       {/*// On se refere a la fonction situé dans le parent, le props set à ce que l'enfant seche que
                       la fonction a été passé par le parent*/}
                       <span>Learn more</span>
                       <br/>
                       <img src={ArrowDown} className="Arrow"  onClick={this.props.showLearnMore}/>
                   </button>
               </div>
           </div>
        );
    }

}