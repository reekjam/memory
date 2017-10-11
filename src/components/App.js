import React, { Component } from 'react';
import Board from './Board';
import Menu from './Menu';
import Scoreboard from './Scoreboard';
import './App.css';
import shuffle from '../utils/shuffle';
import colors from '../data/colors';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameOver: false,
      matchedTiles: [],
      tiles: shuffle(colors.concat(colors))
    };

    this.resetGame = this.resetGame.bind(this);
    this.setMatchedTiles = this.setMatchedTiles.bind(this);
  }

  componentDidUpdate() {
    const { gameOver, matchedTiles } = this.state;

    if (gameOver === false && matchedTiles.length === colors.length) {
      this.setState({ gameOver: true });
    };
  }

  resetGame() {
    this.setState({
      gameOver: false,
      matchedTiles: [],
      tiles: shuffle(colors.concat(colors))
    });
  }

  setMatchedTiles(tile) {
    const { matchedTiles } = this.state;

    this.setState({
      matchedTiles: [...matchedTiles, tile]
    });
  }

  render() {
    const { gameOver, matchedTiles, tiles } = this.state;

    return (
      <div className='app'>
        <Scoreboard matchedTiles={matchedTiles} />
        <Board
          clickHandlerCallback={this.setMatchedTiles}
          gameOver={gameOver}
          matchedTiles={matchedTiles}
          tiles={tiles}
        />
        <Menu clickHandlerCallback={this.resetGame} gameOver={gameOver} />
      </div>
    );
  }
}

export default App;
