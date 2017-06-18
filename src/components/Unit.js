import React, { Component } from 'react';
import './Unit.css';

class Unit extends Component {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           home: true
  //       };
  //   }

  render() {
    let className = "Unit";
    var divStyle = {
        left: this.props.x,
        top: this.props.y,
    };

    return (
        <div className={className} style={divStyle} onClick={this.props.click}>
            {this.props.text}
        </div>
    );
  }
}

export default Unit;
