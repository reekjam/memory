import React from 'react';
import './Tile.css';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { color, id } = this.props;
    const data = { id, color };

    this.props.handleClickCallback(data);
  }

  render() {
    const { activeTiles, color, id, isMatched } = this.props;

    const activeStyle = {
      backgroundColor: activeTiles.filter(tile => tile.id === id).length ? color : 'transparent'
    };

    const matchedStyle = {
      backgroundColor: color
    };

    const style = isMatched ? matchedStyle : activeStyle;

    return (
      <div
        className='tile'
        onClick={this.handleClick}
        style={style}
      >
        <span>{isMatched ? color : ''}</span>
      </div>
    );
  }
};
