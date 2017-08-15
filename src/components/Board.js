import React from 'react';
import Tile from './Tile';
import './Board.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTiles: [],
      matchedTiles: [],
    }

    this.clickCallback = this.clickCallback.bind(this);
    this.checkIfMatch = this.checkIfMatch.bind(this);
  }

  clickCallback(data) {
    const { activeTiles } = this.state;

    this.setState({ activeTiles: [...activeTiles, data] }, () => this.checkIfMatch(data));
  }

  checkIfMatch(data) {
    const { clickHandlerCallback } = this.props;
    const { activeTiles, matchedTiles } = this.state;

    if (activeTiles.length > 2) {
      this.setState({ activeTiles: [data] });
    } else if (
      activeTiles.length === 2 &&
      activeTiles[0]['color'] === activeTiles[1]['color'] &&
      activeTiles[0]['id'] !== activeTiles[1]['id']
    ) {
      clickHandlerCallback(activeTiles);
    };
  }

  render() {
    const { matchedTiles, tiles } = this.props;
    const { activeTiles } = this.state;

    const board = tiles.map((tile, i) => {
      return (
        <Tile
          activeTiles={activeTiles}
          color={tile}
          handleClickCallback={this.clickCallback}
          id={i}
          isMatched={matchedTiles.map(tile => tile.color).includes(tile)}
          key={i}
          matchedTiles={matchedTiles}
        />
      );
    });

    return (
      <div className='board'>
        {board}
      </div>
    )
  }
};
