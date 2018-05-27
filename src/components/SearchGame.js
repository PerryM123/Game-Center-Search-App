import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loading_logo from './../images/loading_icon.png';
import SearchGameCover from './SearchGameCover';
import wordpress_api from './wordpress_api_url/config.json';

class SearchGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: "",
      loading: true
    }
    this.buttonHandler = this.buttonHandler.bind(this);
    console.log('url: ' + wordpress_api.WORDPRESS_API_GAMES_URL)
  }
  componentWillMount() {
    console.log("componentWillMount()");
    /*
    * No relative path for json data
    */
    const games_url = "";
    // axios.get('/gameData.json')
    axios.get(games_url)
      .then((results) => {

        console.log("results...");
        console.log(results);
        const gamesList = results.data.map((data, num)=> {
          const link = "/search-game/" + data.acf.game_id;
          this.setState({
            loading: false
          });
          return (
            <li key={num}>
              <Link to={link}>
                <img src={data.acf.game_cover} alt={data.acf.game_id}/>
                <p className="contents--search-game__game-title">{data.title.rendered}</p>
              </Link>
            </li>
          );
        });
        this.setState({
          gamesList: gamesList
        });

    console.log("componentWillMount() SETSTATE");
      });
  }
  buttonHandler() {
    // load more items!!
  }
  render() {
    return (
      <div>
        <SearchGameCover />
        <div className="contents contents--search-game">
          {
            (this.state.loading) ? <div className="contents--search-game__loading_now"><img src={loading_logo} alt="loading-icon" /></div> : null
          }
          <ul className="contents--search-game__loaded-games">
            {this.state.gamesList}
          </ul>
          {/*<button onClick={this.buttonHandler}>Load More</button>*/}
        </div>
      </div>
    );
  }
}

export default SearchGame;
