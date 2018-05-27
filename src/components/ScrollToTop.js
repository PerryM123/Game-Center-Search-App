import React, { Component } from 'react';


class ScrollToTop extends Component {
	componentDidUpdate() { /*Is this an appropriate componentDIdUpdate implementation????*/
		window.scrollTo(0, 0);
	}
  render() {
    return (
    	<span></span> /*This looks stupid...*/
    );
  }
}

export default ScrollToTop;
