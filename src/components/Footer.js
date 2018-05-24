import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from './../images/header-icon.png'; // should this be in the public????

class Footer extends Component {
  render() {
    return (
      <footer className="contents contents--footer">
				<div className="contents--footer__someLogo">
					<Link to="/"><img src={ headerLogo } /></Link>
  			</div>
  		</footer>
    );
  }
}

export default Footer;
