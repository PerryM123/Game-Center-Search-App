import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loading_logo from './../images/loading_icon.png';
import SearchGameCover from './SearchGameCover';
import { startLoading, finishLoading } from './../actions/action';
import wordpress_api from './wordpress_api_url/config.json';

class SearchGame extends Component {
  constructor(props) {
    super(props);
    console.log('url: ' + wordpress_api.WORDPRESS_API_GAMES_URL);
  }
  componentWillMount() {
    const games_url = wordpress_api.WORDPRESS_API_GAMES_URL;
    let gameStuff;
    this.props.dispatch(startLoading());
    axios.get(games_url)
    .then((results) => {
      gameStuff = results.data.map((data, num)=> {
      const link = "/search-game/" + data.acf.game_id;
      return (
        <li key={num}>
          <Link to={link}>
            <img src={data.acf.game_cover} alt={data.acf.game_id}/>
            <p className="contents--search-game__game-title">{data.title.rendered}</p>
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
    const { gamesList, loading, hasData } = this.props;
    return (
      <div>
        <SearchGameCover />
        <div className="contents contents--search-game">
          {
            (loading) ? <div className="contents--search-game__loading_now"><img src={loading_logo} alt="loading-icon" /></div> : null
          }
          <ul className="contents--search-game__loaded-games">
            {gamesList}
          </ul>
          {/*<button onClick={this.buttonHandler}>Load More</button>*/}
        </div>
      </div>
    );
  }
}

export default SearchGame;
