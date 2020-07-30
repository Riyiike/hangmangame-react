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
        answer :  randomWord()
    }    
}

handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
        guessed: st.guessed.add(letter),
        mistake: st.mistake + (st.answer.includes(letter)? 0 : 1 )
    }));
}
guessedWord(){
    return this.state.answer.split('').map(letter =>(this.state.guessed.has(letter)? letter:" _ "));
}

generateButtons(){
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
        <button 
        className = "btn btn-lg btn-primary m-2"
        key={letter}
        value={letter}
        onClick ={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
        >
            {letter}
        </button>
    ));
}
resetButton = () => {
    this.setState({
        mistake:0,
        guessed:new Set([]),
        answer:randomWord()

    });
    
}

render (){
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if(isWinner){
        gameStat ="You Won!!!"
    }

    if (gameOver){
        gameStat ="You lost!!!"
    }

    return (
        <div className ="Hangman container">
        <h1 className = "text-center">Hangman</h1>
        <div className ="float-right">Wrong Gueeses : {this.state.mistake} of {this.props.maxWrong}</div>
        <div className="text-center">
        <img src ={this.props.images[this.state.mistake]} alt =''/>
        </div>
        <div className ="text-center">
        <p>Guess the Programming Language:</p>
        <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
        <p>{gameStat}</p>
        <button className="btn btn-info" onClick={this.resetButton}>Reset</button>
        </div>
        </div>
    )
}
}


export default Hangman;