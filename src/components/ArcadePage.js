import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swiper from 'react-id-swiper';
import ArcadeRender from './ArcadeRender';
import SearchArcadeCover from './SearchArcadeCover';
import { arcadeStartLoading, arcadeFinishLoading } from './../actions/action';
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
    let arcadeStuff;
    this.props.dispatch(arcadeStartLoading());

    axios.get(arcades_url)
     .then((results) => {
      if ( results.data ) {
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

        arcadeStuff = results.data.map((arcadeItem, arcadeKey) => {
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
      }
    }).then(() => {
        this.props.dispatch(arcadeFinishLoading(arcadeStuff));
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
