import React from 'react';
import './ScoreboardTile.css';

export default class ScoreboardTile extends React.Component {
  render() {
    const { index, matchedTiles } = this.props;
    const matchedClass = matchedTiles[index] ? 'matched' : '';

    return (
      <div className='scoreboard-tile'>
        <div className={`color-fill ${matchedClass}`} style={{ backgroundColor: matchedTiles[index] }}></div>
      </div>
    )
  }
};
