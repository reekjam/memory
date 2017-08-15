import React from 'react';
import ScoreboardTile from './ScoreboardTile';
import './Scoreboard.css';
import colors from '../data/colors';

export default class Scoreboard extends React.Component {
  render() {
    const { matchedTiles } = this.props;

    const scoreboardTiles = colors.map(color => {
      const isMatched = matchedTiles.map(tile => tile.color).includes(color);
       
      return <ScoreboardTile isMatched={isMatched} color={color} />
    });

    return (
      <div className='scoreboard'>
        {scoreboardTiles}
      </div>
    )
  }
};
