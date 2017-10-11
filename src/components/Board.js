import React from 'react';
import Tile from './Tile';
import './Board.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTiles: []
    }

    this.clickCallback = this.clickCallback.bind(this);
    this.checkIfMatch = this.checkIfMatch.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { gameOver } = nextProps;

    if (gameOver) {
      this.setState({
        activeTiles: []
      });
    };
  }

  clickCallback(data) {
    const { activeTiles } = this.state;

    this.setState({ activeTiles: [...activeTiles, data] }, () => this.checkIfMatch(data));
  }

  checkIfMatch(data) {
    const { clickHandlerCallback } = this.props;
    const { activeTiles } = this.state;

    if (activeTiles.length > 2) {
      this.setState({ activeTiles: [data] });
    } else if (
      activeTiles.length === 2 &&
      activeTiles[0]['color'] === activeTiles[1]['color'] &&
      activeTiles[0]['id'] !== activeTiles[1]['id']
    ) {
      clickHandlerCallback(activeTiles[0]['color']);
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
          isMatched={matchedTiles.includes(tile)}
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
