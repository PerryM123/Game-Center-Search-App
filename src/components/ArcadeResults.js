import React, { Component } from 'react';
import axios from 'axios';
import Swiper from 'react-id-swiper';
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
*/

class ArcadeResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arcadeData: "",
      gamesList: [""]
    }
  }
  componentDidMount() {
    axios.get('/arcadeData.json')
     .then((results) => {
      this.setState({
        arcadeList: results.data.arcades
      });
      console.log("arcade data: ");
      console.log(results);
      if ( results.data.arcades ) {
        const arcadeMatchList = results.data.arcades.filter((arcade) => {
          return arcade.available_games.some((game) => {
            return (game.game_id === this.props.match.params.id)
          })
        });

        console.log("arcadeMatchList");
        console.log(arcadeMatchList);

        console.log("arcadeList");
        console.log(this.state.arcadeList);

        this.setState({
          arcadeList: arcadeMatchList
        });
      }
    });
  }

  arcadeRenderer() {
    const swiperParams = {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };

    const cover_image = "",
          SOME_GMAPS_LINK_HERE = "",
          SOME_READMORE_LINK_HERE = "";
    return (
      this.state.arcadeList.map((item,i)=>{
        return (
          <div key={i} className="contents--arcade-results__arcade-info">
            <h2>{item.arcade_name}</h2>
            {/*<img className="contents--arcade-results__cover-image" src={item.cover_image} />*/}
            <div className="contents--arcade-results__cover-image" style={{backgroundImage: "url(" + item.cover_image + ")"}}></div>
            <div className="contents--arcade-results__image-carousel">
              <Swiper {...swiperParams}>
              {/*
              * FIXME:
              * Images seem to be too small when using a small device since the images' width
              * seem to be set as percentages (???)
              */}
                <div>
                  <img className="contents--arcade-results__image-carousel--images" src={item.arcade_img_thumbnail} />
                </div>
                <div>
                  <img className="contents--arcade-results__image-carousel--images" src={item.arcade_img_thumbnail} />
                </div>
                <div>
                  <img className="contents--arcade-results__image-carousel--images" src={item.arcade_img_thumbnail} />
                </div>
                <div>
                  <img className="contents--arcade-results__image-carousel--images" src={item.arcade_img_thumbnail} />
                </div>
              </Swiper>
            </div>
            <div>
              <p>{item.description}</p>
              <div className="contents--arcade-results__buttons-area">
              {
              /*
              * React Question:
              * Maybe I'm not doing BEM correctly... It seems that my class names are becoming extremely long...
              * Is this normal?
              */
              }
                <a className="contents--arcade-results__button contents--arcade-results__button--google-maps" href={item.gmaps_link}> Google Maps </a>
                <a className="contents--arcade-results__button contents--arcade-results__button--read-more" href={item.gmaps_link}> Read More </a>
              </div>
            </div>
          </div>
        )
      })
    );
  }

  arcadeNoRenderer() {
    return (
      <div>
        NO ARCADES MATCHED!
      </div>
    )
  }


  render() {
    const ourGame = this.props.match.params.id; // game in parameter
    // arrNAme.find(ourGame)

    return (
      <div className="contents contents--arcade-results">
        <h2>Arcade Search: {ourGame}</h2>
        {
          /*
          * React Question:
          * What is the correct way of formating a Conditional (ternary) Operator??
          *
          * ANSWER: To improve readibility, it is recommended to make only a simple one line.
          *         Separate functions. Don't to do everything in render()
          */
          (this.state.arcadeList) ? this.arcadeRenderer() : this.arcadeNoRenderer()
        }
        <p></p>
      </div>
    );
  }
}

export default ArcadeResults;
