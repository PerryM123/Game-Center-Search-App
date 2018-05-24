import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loading_logo from './../images/loading_icon.png';
import { startLoading, finishLoading } from './../actions/action';

class SearchGame extends Component {
  componentWillMount() {
    console.log("SearchGame: componentWillMount");
    let gameStuff;
    this.props.dispatch(startLoading());
    axios.get('/gameData.json')
    .then((results) => {
      gameStuff = results.data.games.map((data, num)=> {
      const link = "/search-game/" + data.game_id;
      return (
        <li key={num}>
          <Link to={link}>
            <img src={data.game_img_thumbnail} alt={data.game_id}/>
            <p>{data.game_name}</p>
          </Link>
        </li>
      );
      });
    }).then(() => {
      this.props.dispatch(finishLoading(gameStuff));
    });
  }
  buttonHandler() {
    // load more items!!
  }
  render() {
    console.log("+*+**+**+*+*+**+**+***++*+**+**+***+**+SearchGame: render ++*+**+**+***++**+**+***++*+**+**+***+");
    const { gamesList, loading, hasData } = this.props;
    console.log("gamesList:");
    console.log(gamesList);
    console.log("loading:");
    console.log(loading);
    console.log("hasData:");
    console.log(hasData);
    return (
      <div className="contents contents--search-game">
        {
          (loading) ? <div className="loading_now"><img src={loading_logo} alt="loading-icon" /></div> : null
        }
        <h2>Search By Game</h2>
        <ul className="loaded-games">
          {gamesList}
        </ul>
        <button onClick={this.buttonHandler}>Load More</button>
      </div>
    );
  }
}

export default SearchGame;
