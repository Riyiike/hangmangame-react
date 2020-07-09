import React, {Component} from 'react';
import './Hangman.css';
import {randomWord} from './Words.js';

//IMPORT IMAGES
import step0 from './img/1.png';
import step1 from './img/2.png';
import step2 from './img/3.png';
import step3 from './img/4.png';
import step4 from './img/5.png';
import step5 from './img/6.png';
import step6 from './img/win.png';


class Hangman extends Component  {
static defaultProps = {
    maxWrong: 6,
    images : [step0, step1, step2, step3, step4, step5, step6]
}
//create a stateprop
constructor(props) {
    super(props); 
    this.state = {
        mistake : 0,
        guessed : new Set ([]),
        answer :  randomWord();
    }    
}

render (){
    return (
        <div>
        <h1>Hangman</h1>
        </div>
    )
}
}


export default Hangman;