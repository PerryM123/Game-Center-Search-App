import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import SingleArcadeCover from './SingleArcadeCover'
import './../scss/swiper.scss'; // Double check to see if this is the correct way to use swiper' scss

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

/*
* Things to do:
* Like Game Search, make a redux store for Arcade Search
*/

class ArcadeSingle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { arcadesList, arcadesLoading, arcadeHasData } = this.props;
    const selectedArcade = this.props.match.params.arcade_id;
    console.log("arcadesList:")
    console.log(arcadesList)
    return (
      <div>
        <SingleArcadeCover 
          selectedArcade={ selectedArcade } 
        />
        { this.props.match.params.arcade_id }
      </div>
    );
  }
}

export default ArcadeSingle;
