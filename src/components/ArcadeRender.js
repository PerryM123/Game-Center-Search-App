import React, { Component } from 'react';
import axios from 'axios';
import Swiper from 'react-id-swiper';
import loading_logo from './../images/loading_icon.png';
import './../scss/swiper.scss';
import wordpress_api from './wordpress_api_url/config.json';

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
    this.state = {
    
    }
  }
  arcadeRenderer() {
    
    // This all will be assumed to be done in the previous component
    // and passed down to this component via props

    /*const swiperParams = {
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
    return (
      this.state.arcadeList.map((arcadeItem,arcadeKey)=>{
        return (
          <div key={arcadeKey} className="contents--arcade-results__arcade-info">
            <h2 className="contents--arcade-results__arcade-title">{arcadeItem.arcade_name}</h2>
            <div className="contents--arcade-results__cover-image"
                 style={{
                  backgroundImage: "url(" + arcadeItem.cover_image + ")"}}
            ></div>
            <ul className="contents--arcade-results__carousel-container">
              <Swiper {...swiperParams}>
              {
                arcadeItem.carousel_gallery &&
                  arcadeItem.carousel_gallery.map((galleryItem, galleryKey) => {
                    return (
                      <li className="contents--arcade-results__carousel-images" key={galleryKey}
                      style={{
                        background: "url(" + galleryItem.gallery_image_link + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}></li>
                    )
                  })
              }
              </Swiper>
            </ul>
            <div>
              <p className="contents--arcade-results__description-area">{arcadeItem.description}</p>
              <div className="contents--arcade-results__buttons-area">
              {
              }
                <a className="contents--arcade-results__button contents--arcade-results__button--google-maps" href={arcadeItem.gmaps_link}> Google Maps </a>
                <a className="contents--arcade-results__button contents--arcade-results__button--read-more" href={"/arcade-info/" + arcadeItem.arcade_id}> Read More </a>
              </div>
            </div>
          </div>
        )
      })
    );*/
  }

  render() {
    // const ourGame = this.props.match.params.id; // game in parameter
    // arrNAme.find(ourGame)

    return (
      <div className="contents contents--arcade-results">
        <h2>Arcade Render.js</h2>
        {
          /*
          * React Question:
          * What is the correct way of formating a Conditional (ternary) Operator??
          *
          * ANSWER: To improve readibility, it is recommended to make only a simple one line.
          *         Separate functions. Don't to do everything in render()
          */
          (this.state.loading) ? <div className="loading_now"><img src={loading_logo} alt="loading-icon" /></div> : this.props.arcadeData
        }
        <p></p>
      </div>
    );
  }
}

export default ArcadeRender;
