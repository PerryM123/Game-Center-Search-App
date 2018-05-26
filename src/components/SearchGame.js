import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loading_logo from './../images/loading_icon.png';
import SearchGameCover from './SearchGameCover';

class SearchGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: "",
      loading: true
    }
    this.buttonHandler = this.buttonHandler.bind(this);
  }
  componentWillMount() {
    console.log("componentWillMount()");
    /*
    * No relative path for json data
    */
    axios.get('/gameData.json')
      .then((results) => {

    console.log("componentWillMount() then");
        const gamesList = results.data.games.map((data, num)=> {
          const link = "/search-game/" + data.game_id;
          this.setState({
            loading: false
          });
          return (
            <li key={num}>
              <Link to={link}>
                <img src={data.game_img_thumbnail} alt={data.game_id}/>
                <p className="contents--search-game__game-title">{data.game_name}</p>
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
            (this.state.loading) ? <div className="loading_now"><img src={loading_logo} alt="loading-icon" /></div> : null
          }
          <ul className="contents--search-game__loaded-games">
            {this.state.gamesList}
          </ul>
          <button onClick={this.buttonHandler}>Load More</button>
        </div>
      </div>
    );
  }
}

export default SearchGame;
