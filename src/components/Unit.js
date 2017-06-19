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
    if(this.props.isLeft){
      className += ' is-left';
    }
    let divStyle = {
        left: this.props.x,
        top: this.props.y,
    };

    return (
        <div className={className} style={divStyle} onClick={this.props.click}>
            <div className="Unit-line" />
            <div className="Unit-text">
                {this.props.text}
            </div>
        </div>
    );
  }
}

export default Unit;
