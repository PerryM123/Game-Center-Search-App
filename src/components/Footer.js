import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="contents contents--footer">
        <p>This is a footer</p>
        <Link to="/">This is a footer LOGO</Link>
      </footer>
    );
  }
}

export default Footer;
