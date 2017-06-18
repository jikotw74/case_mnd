import React, { Component } from 'react';
import './VideoThumb.css';

class VideoThumb extends Component {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           home: true
  //       };
  //   }

  render() {
    let className = "VideoThumb";
    if(this.props.selected)className += " selected";
    return (
        <div className={className} onClick={this.props.click}>
            {this.props.text}
        </div>
    );
  }
}

export default VideoThumb;
