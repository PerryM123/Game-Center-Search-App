import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchGameCover from './SearchGameCover';
import GameRenderer from './GameRenderer';
import { gameStartLoading, gameFinishLoading, gameLoadingError } from './../actions/action';
import wordpress_api from './wordpress_api_url/config.json';
import loading_logo from './../images/loading_icon.png';

class SearchGame extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const games_url = wordpress_api.WORDPRESS_API_GAMES_URL;
    let gameStuff;
    const gameListCache = localStorage.getItem('gamesList');

    // Local storage isn't working
    // Reference: https://stackoverflow.com/questions/44961688/sharing-redux-state-to-other-clients-doesnt-work-when-stringified
    
    // if (gameListCache) {
    //   console.log("Cache happened");
    //   console.log("gameListCache");
    //   console.log(gameListCache);

    //   console.log("json time");
    //   console.log(JSON.parse(gameListCache));
    //   this.props.dispatch(gameFinishLoading(JSON.parse(gameListCache)));
    //   return;
    // }
    axios.get(games_url)
    .then((gameData) => {
      console.log("gameData---------------------");
      console.log(gameData);
      this.props.dispatch(gameStartLoading());
      this.props.dispatch(gameFinishLoading(gameData.data));
    }).catch((error) => {
      this.props.dispatch(gameLoadingError());
      alert("Error loading Game Data");
    });
  }
  buttonHandler() {
    // load more items!!
  }
  render() {
    let { gamesList, gamesLoading, gamesHasData } = this.props;
    if (!gamesList) {
      gamesList = ""
    }
    return (
      <div>
        <SearchGameCover />
        <div className="contents contents--search-game">
          {
            gamesLoading &&
            <div className="loading_now"><img src={loading_logo} alt="loading-icon" /></div>
          }
          <ul className="contents--search-game__loaded-games">
            {
              <GameRenderer gameData={gamesList} />
            }
          </ul>
          {/*<button onClick={this.buttonHandler}>Load More</button>*/}
        </div>
      </div>
    );
  }
}

export default SearchGame;
