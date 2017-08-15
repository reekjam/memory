import React from 'react';
import './ScoreboardTile.css';

export default class ScoreboardTile extends React.Component {
  render() {
    const { color, isMatched } = this.props;
    const matchedClass = isMatched ? 'matched' : '';

    return (
      <div className='scoreboard-tile'>
        <div className={`color-fill ${matchedClass}`} style={{ backgroundColor: color }}></div>
      </div>
    )
  }
};
