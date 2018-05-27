import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loading_logo from './../images/loading_icon.png';
import SearchGameCover from './SearchGameCover';
import { startLoading, finishLoading } from './../actions/action';

class SearchGame extends Component {
  componentWillMount() {
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
            <p className="contents--search-game__game-title">{data.game_name}</p>
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
            (loading) ? <div className="loading_now"><img src={loading_logo} alt="loading-icon" /></div> : null
          }
          <ul className="contents--search-game__loaded-games">
            {gamesList}
          </ul>
          <button onClick={this.buttonHandler}>Load More</button>
        </div>
      </div>
    );
  }
}

export default SearchGame;
