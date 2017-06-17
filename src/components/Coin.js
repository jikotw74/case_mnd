import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           home: true
  //       };
  //   }

  render() {
    let className = "Coin";
    if(this.props.selected)className += " selected";
    const style = {
      backgroundPositionY: this.props.y + "px"
    };
    return (
        <div className={className} onClick={this.props.click} style={style}>
            {this.props.text}
        </div>
    );
  }
}

export default Coin;
