import React from 'react';
import ScoreboardTile from './ScoreboardTile';
import './Scoreboard.css';
import colors from '../data/colors';

export default class Scoreboard extends React.Component {
  render() {
    const { matchedTiles } = this.props;

    const scoreboardTiles = colors.map((color, i) => {
      return <ScoreboardTile index={i} key={`${color}-${i}`} matchedTiles={matchedTiles} />
    });

    return (
      <div className='scoreboard'>
        {scoreboardTiles}
      </div>
    )
  }
};
