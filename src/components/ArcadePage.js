import React, { Component } from 'react';
import axios from 'axios';
import Swiper from 'react-id-swiper';
import loading_logo from './../images/loading_icon.png';
import './../scss/swiper.scss'; // Double check to see if this is the correct way to use swiper' scss
import ArcadeRender from './ArcadeRender';
import SearchArcadeCover from './SearchArcadeCover';

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
  componentDidMount() {
    axios.get('/arcadeData.json')
     .then((results) => {
      if ( results.data.arcades ) {
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
        const arcadeRenderData = results.data.arcades.map((arcadeItem, arcadeKey) => {
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
                <a className="contents--arcade-results__button contents--arcade-results__button--google-maps" href={arcadeItem.gmaps_link}> Google Maps </a>
                <a className="contents--arcade-results__button contents--arcade-results__button--read-more" href={"/arcade-info/" + arcadeItem.arcade_id}> Read More </a>
              </div>
            </div>
          </div>
        )
      });
        this.setState({
          arcadeData: arcadeRenderData
        });
      }
    });
  }
  render() {
    console.log("this.state.arcadeList");
    console.log(this.state.arcadeList);
    return (
      <div>
        <SearchArcadeCover />
        <div className="contents contents--arcade-page">
          <h2>Arcade Page.js:</h2>
          <ArcadeRender arcadeData={this.state.arcadeData} />
        </div>
      </div>
    );
  }
}

export default ArcadePage;
