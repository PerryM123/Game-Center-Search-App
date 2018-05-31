import React, { Component } from 'react';
import axios from 'axios';
import Swiper from 'react-id-swiper';
import loading_logo from './../images/loading_icon.png';
import './../scss/swiper.scss';
import wordpress_api from './wordpress_api_url/config.json';
import PropTypes from 'prop-types';

/*
* React Question:
* So in this project, to avoid overloading the render function,
* I move the logic out to a separate function. But wouldn't it also be possible to
* make these into their own components?
*
* How do I make the decision between between:
* 1) making another functions for the logic
* and
* 2) making a component to have that logic (maybe this leads into smart components)
*
* Does it become:
* If it needs to be rendered, it should be it's own component?
* If it is ONLY logic, then it should be a function?
*/

// need map or filtered list passed as props

class ArcadeRender extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contents contents--arcade-results">
        {
          /*
          * React Question:
          * What is the correct way of formating a Conditional (ternary) Operator??
          *
          * ANSWER: To improve readibility, it is recommended to make only a simple one line.
          *         Separate functions. Don't to do everything in render()
          */
          (this.props.loading) ? <div className="loading_now"><img src={loading_logo} alt="loading-icon" /></div> : this.props.arcadeData
        }
        <p></p>
      </div>
    );
  }
}

ArcadeRender.propTypes = {
  loading: PropTypes.bool
}

export default ArcadeRender;
