import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loading_logo from './../images/loading_icon.png';
import SearchGameCover from './SearchGameCover';
import { gameStartLoading, gameFinishLoading } from './../actions/action';
import wordpress_api from './wordpress_api_url/config.json';

class SearchGame extends Component {
  constructor(props) {
    super(props);
    // console.log('url: ' + wordpress_api.WORDPRESS_API_GAMES_URL);
  }
  componentWillMount() {
    const games_url = wordpress_api.WORDPRESS_API_GAMES_URL;
    let gameStuff;
    const gameListCache = localStorage.getItem('gamesList');

    this.props.dispatch(gameStartLoading());

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
    .then((results) => {
      gameStuff = results.data.map((data, num)=> {
      const link = "/search-game/" + data.acf.game_id;
      const gamecover_img = data.acf.game_cover;
      let gamecover_thumbnail = gamecover_img.substring(0, gamecover_img.length - 4) + '-212x300.jpg';

      return (
        <li key={num}>
          <Link to={link}>
            <img src={gamecover_thumbnail} alt={data.acf.game_id}/>
            <p className="contents--search-game__game-title">{data.title.rendered}</p>
          </Link>
        </li>
      );
      });
    }).then(() => {
      console.log("Hmmmm for gameStuff: ")

      console.log(gameStuff)
      this.props.dispatch(gameFinishLoading(gameStuff));
      localStorage.setItem('gamesList', JSON.stringify(gameStuff));
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
            <div className="contents--search-game__loading_now"><img src={loading_logo} alt="loading-icon" /></div>
          }
          <ul className="contents--search-game__loaded-games">
            {
              gamesList
            }
          </ul>
          {/*<button onClick={this.buttonHandler}>Load More</button>*/}
        </div>
      </div>
    );
  }
}

export default SearchGame;
