import React from 'react';
import './Menu.css';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clickHandlerCallback();
  }

  render() {
    const { gameOver } = this.props;

    return (
      <div className={`menu ${gameOver ? 'active' : ''}`}>
        <div className='container'>
          <button onClick={this.handleClick}>Play Again</button>
        </div>
      </div>
    )
  }
};
