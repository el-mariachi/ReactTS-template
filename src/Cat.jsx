import React, { Component } from 'react';
import catPic from './images/cat.png';

class Cat extends Component {
  render() {
    const { mouse } = this.props;
    return (
      <img src={catPic} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    )
  }
}

export { Cat }
