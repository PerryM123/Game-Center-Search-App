import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    this.getCarouselThumbnail = this.getCarouselThumbnail.bind(this);
  }
  getCarouselThumbnail(carouselThumbnails) {
    const thumbnail_size = "-178x100";
    const imageFileType = carouselThumbnails.substring(carouselThumbnails.lastIndexOf("."), carouselThumbnails.length);
    const imageLocation = carouselThumbnails.substring(0, carouselThumbnails.length - 4);
    const finalAnswer = imageLocation  + thumbnail_size + imageFileType;

    return finalAnswer;
  }
  renderArcadeData() {
    if ( this.props.arcadeData ) {
      const swiperParams = {
        slidesPerView: 5,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          480: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      };

      const arcadeStuff = this.props.arcadeData.map((arcadeItem, arcadeKey) => {
        return (
          <div key={arcadeKey} className="contents--arcade-results__arcade-info">
            <h2 className="contents--arcade-results__arcade-title">{arcadeItem.title.rendered}</h2>
            <div className="contents--arcade-results__cover-image"
                 style={{
                  backgroundImage: "url(" + arcadeItem.acf.arcade_image.url + ")"}}
            ></div>
            <ul className="contents--arcade-results__carousel-container">
              <Swiper {...swiperParams}>
              {
                arcadeItem.acf.carousel &&
                  arcadeItem.acf.carousel.map((galleryItem, galleryKey) => {
                    const carousel_thumbnail = this.getCarouselThumbnail(galleryItem.carousel_image);
                    return (
                      <li className="contents--arcade-results__carousel-images" key={galleryKey}
                      style={{
                        background: "url(" + carousel_thumbnail + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}></li>
                    )
                  })
              }
              </Swiper>
            </ul>
            <div>
              <p className="contents--arcade-results__description-area">{arcadeItem.acf.description}</p>
              <div className="contents--arcade-results__buttons-area">
                <Link className="contents--arcade-results__button contents--arcade-results__button--read-more" to={"/search-arcade/" + arcadeItem.acf.arcade_id}> Read More </Link>
                <a className="contents--arcade-results__button contents--arcade-results__button--google-maps" href={arcadeItem.acf.gmaps_link} target="_blank"> Google Maps </a>
              </div>
            </div>
          </div>
        );
      });
      return arcadeStuff;
    }
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
          (this.props.loading) ? <div className="loading_now"><img src={loading_logo} alt="loading-icon" /></div> : this.renderArcadeData()
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
