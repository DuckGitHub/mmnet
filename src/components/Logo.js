import React, { Component } from 'react';

import logo from '../img/logo/logo.png'
import './logo.css';

class Logo extends Component {
  render() {
    return (
      <div id="centrador">
        <img id="imagen" src={logo}></img>
      </div>
    );
  }
}

export default Logo;