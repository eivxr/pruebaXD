import React from 'react'
import '../../src/img/0.png';
import '../../src/img/1.png';
import '../../src/img/2.png';
import '../../src/img/3.png';
import '../../src/img/4.png';
import '../../src/img/5.png';
import '../../src/img/6.png';
import './../App.css'

export const Hangman = ({guesses}) => {


  return (
    <div className='hangman-container'  style={{backgroundImage:`url(https://github.com/eivxr/pruebaXD/src/img/${guesses}.png)`}}>
    
    </div>
  )
}
