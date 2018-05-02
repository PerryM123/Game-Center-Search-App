import React, { Component } from 'react';
import axios from 'axios';

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
    const cover_image = "",
          SOME_GMAPS_LINK_HERE = "",
          SOME_READMORE_LINK_HERE = ""; 
    return (
      this.state.arcadeList.map((item,i)=>{
        return ( 
          <div key={i}>{i + 1}) {item.arcade_name}
            <div className="contents--arcade-results__arcade-info">
              <img className="contents--arcade-results__cover-image" src={cover_image} />
              <div className="contents--arcade-results__image-carousel">
                <img className="contents--arcade-results__image-carousel--images" src={cover_image} />
                <img className="contents--arcade-results__image-carousel--images" src={cover_image} />
                <img className="contents--arcade-results__image-carousel--images" src={cover_image} />
                  <img className="contents--arcade-results__image-carousel--images" src={cover_image} />
                </div>
                <div>
                  <h2>{/*Arcade title here*/}</h2>
                  <p>{/*Arcade title here*/}</p>
                  <div className="contents--arcade-results__buttons-area">
                    <a className="contents--arcade-results__buttons-area--google-maps" href={SOME_GMAPS_LINK_HERE} />
                    <a className="contents--arcade-results__buttons-area--read-more" href={SOME_READMORE_LINK_HERE} />
                  </div>
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
        <h3>Hmm: 
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
        </h3>
        <p></p>
      </div>
    );
  }
}

export default ArcadeResults;
