import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           home: true
  //       };
  //   }

  render() {
    let className = "Person";

    return (
        <div className={className} onClick={this.props.click}>
            {this.props.text}
        </div>
    );
  }
}

export default Person;
