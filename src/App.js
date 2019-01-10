import React, { Component } from 'react';
import Banner from './components/Banner';
import Feedback from './components/Feedback';
import Form from './components/Form';
import Progress from './components/Progress';
import Reset from './components/Reset';
import Info from './components/Info';
import Author from './components/Author';

import './App.css';

class App extends Component {
  generateRandomNumber = () => Math.floor(Math.random()*100) + 1;

  getInitialState = () => {
    return {
      actual: this.generateRandomNumber(),
      guess: undefined,
      allGuesses: [],
      attempt: 0,
      feedbackMessage: 'Waiting...',
      block: false
    }
  }

  state = this.getInitialState();

  resetGame = () => {
    this.setState(this.getInitialState());
  }

  updateAppState = guess => {
    const absDiff = Math.abs(guess - this.state.actual)
    const {feedbackMessage, feedbackColor} = this.getFeedback(absDiff);

    this.setState(prevState => ({
        guess,
        allGuesses: [...prevState.allGuesses, {guess, feedbackColor}],
        attempt: prevState.attempt + 1,
        feedbackMessage,
        block: absDiff === 0 ? true : false
      })
    );
  }

  getFeedback = absDiff => {
    let feedbackMessage;
    let feedbackColor;

    if (absDiff === 0) {
      feedbackColor= '#000';
      feedbackMessage = 'You Won! Reset the game to play again.';
    } else if (absDiff < 4 && absDiff !== 0) {
      feedbackColor= '#ff5722';
      feedbackMessage = 'Extremely Hot!';
    } else if (absDiff >= 4 && absDiff < 10) {
      feedbackColor= '#ff9800';
      feedbackMessage = 'Hot';
    } else if (absDiff >= 10 && absDiff < 20) {
      feedbackColor= '#ffeb38';
      feedbackMessage = 'Warm';
    } else {
      feedbackColor= '#5bc0de';
      feedbackMessage = 'Cold';
    }

    return {
      feedbackMessage,
      feedbackColor
    }
  }

  render() {
    const guessList = this.state.allGuesses.map((item, index) =>
      <li key={index} className={`guess-${index}`} style={{backgroundColor: item.feedbackColor}}>
        <span>{item.guess}</span>
      </li>
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <header role="banner">
              <Banner />
            </header>
            <main role="main">
              <Feedback feedback={this.state.feedbackMessage}/>
              <Form block = {this.state.block} returnGuessToApp={value => this.updateAppState(value)}/>
              <Progress attempt={this.state.attempt} guess={this.state.guess} guessList={guessList}/>
              <Reset resetGame = {this.resetGame}/>
              <Info />
            </main>
            <footer role="contentinfo">
              <Author />
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;