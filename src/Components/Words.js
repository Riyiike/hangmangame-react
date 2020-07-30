import React from 'react';
// import Hangman from './Components/Hangman';

let programming_languages =[
    "Python",
    "Javascript",
    "Mongodb",
    "json",
    "java",
    "html",
    "css",
    "c",
    "csharp",
    "golang",
    "kotlin",
    "ruby"
]

function randomWord (){
    return programming_languages [Math.floor (Math.random () * programming_languages.length)]
}
export {randomWord};

