import React, { Component } from 'react';
import Board from './Board';
import Scoreboard from './Scoreboard';
import './App.css';
import shuffle from '../utils/shuffle';
import colors from '../data/colors';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matchedTiles: [],
      tiles: shuffle(colors.concat(colors))
    };

    this.setMatchedTiles = this.setMatchedTiles.bind(this);
  }

  setMatchedTiles(tile) {
    const { matchedTiles } = this.state;

    this.setState({
      matchedTiles: [...matchedTiles, tile]
    });
  }

  render() {
    const { matchedTiles, tiles } = this.state;

    return (
      <div className='app'>
        <Scoreboard matchedTiles={matchedTiles} />
        <Board
          clickHandlerCallback={this.setMatchedTiles}
          matchedTiles={matchedTiles}
          tiles={tiles} />
      </div>
    );
  }
}

export default App;
