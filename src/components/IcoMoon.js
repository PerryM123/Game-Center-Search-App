import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IcoMoon extends Component {
  render() {
    return (
      <span className={'icomoon ' + this.props.name}></span>
    );
  }
}

// string is required

IcoMoon.propTypes = {
  name: PropTypes.string
}


export default IcoMoon;
