import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h2>404</h2>
        <button><Link to='/'>Return to Home Page></Link></button>
      </div>
    );
  }
}

export default PageNotFound;
