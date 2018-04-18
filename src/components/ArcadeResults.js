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
        gamesList: results.data.arcades
      });
      if ( results.data.arcades ) {
        const arcadeMatchList = results.data.arcades.filter((arcade) => {
          return arcade.available_games.some((game) => {
            return (game.game_id === this.props.match.params.id)
          })
        });

        console.log("arcadeMatchList");
        console.log(arcadeMatchList);

        console.log("gamesList");
        console.log(this.state.gamesList);

        this.setState({
          gamesList: arcadeMatchList
        });
      }
    });
  }
  render() {
    const ourGame = this.props.match.params.id; // game in parameter
    // arrNAme.find(ourGame)

    return (
      <div className="contents contents--arcade-results">
        <h2>Arcade Search: {ourGame}</h2>
        <h3>Hmm: {
          /*
          * React Question:
          * What is the correct way of formating a Conditional (ternary) Operator??
          */
          this.state.gamesList.length > 0 ?
          this.state.gamesList.map((item,i)=>{
            return <div key={i}>{i + 1}) {item.arcade_name}</div>
          }) :
          <div>
            NO ARCADES MATCHED!
          </div>
        }</h3>
        <p>
        </p>
        <ul>
          {/*this.state.arcadeData*/}
        </ul>
      </div>
    );
  }
}

export default ArcadeResults;
