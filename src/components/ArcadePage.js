import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swiper from 'react-id-swiper';
import ArcadeRender from './ArcadeRender';
import SearchArcadeCover from './SearchArcadeCover';
import { arcadeStartLoading, arcadeFinishLoading, arcadeLoadingError } from './../actions/action';
import wordpress_api from './wordpress_api_url/config.json';
import loading_logo from './../images/loading_icon.png';
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

class ArcadePage extends Component {
  constructor(props) {
    super(props);
    this.getCarouselThumbnail = this.getCarouselThumbnail.bind(this);
  }
  componentWillMount() {
    const arcades_url = wordpress_api.WORDPRESS_API_ARCADES_URL;
    console.log("arcades_url: ", arcades_url)
    let arcadeData;

    axios.get(arcades_url)
    .then((arcadeData)=> {
      this.props.dispatch(arcadeStartLoading());
      console.log("arcadeData: ++++====++++====");
      console.log(arcadeData);
      this.props.dispatch(arcadeFinishLoading(arcadeData.data));
    }).catch(error => {
      this.props.dispatch(arcadeLoadingError());
      alert("Alert loading Data");
    });
  }
  getCarouselThumbnail(carouselThumbnails) {
    const thumbnail_size = "-178x100";
    const imageFileType = carouselThumbnails.substring(carouselThumbnails.lastIndexOf("."), carouselThumbnails.length);
    const imageLocation = carouselThumbnails.substring(0, carouselThumbnails.length - 4);
    const finalAnswer = imageLocation  + thumbnail_size + imageFileType;

    return finalAnswer;
  }
  render() {
    let { arcadesList, arcadesLoading, arcadeHasData } = this.props;
    console.log("arcadesList:")
    console.log(arcadesList)
    return (
      <div>
        <SearchArcadeCover />
        <ArcadeRender arcadeData={arcadesList} loading={arcadesLoading} />
      </div>
    );
  }
}

export default ArcadePage;
