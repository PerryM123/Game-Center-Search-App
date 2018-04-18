import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loading_logo from './../images/loading_icon.png';


class SearchGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: "",
      loading: true
    }
    this.buttonHandler = this.buttonHandler.bind(this);
  }
  componentDidMount() {
    axios.get('gameData.json')
      .then((results) => {
        const gamesList = results.data.games.map((data, num)=> {
          const link = "/search-game/" + data.game_id;
          this.setState({
            loading: false
          });
          return (
            <li key={num}>
              <Link to={link}>
                <img src={data.game_img_thumbnail} alt={data.game_id}/>
                <p>{data.game_name}</p>
              </Link>
            </li>
          );
        });
        this.setState({
          gamesList: gamesList
        });
      });
  }
  buttonHandler() {
    // load more items!!
  }
  render() {
    return (
      <div className="contents contents--search-game">
        {
          (this.state.loading) ? <div className="loading_now"><img src={loading_logo} alt="loading-icon" /></div> : null
        }
        <h2>Search By Game</h2>
        <ul className="loaded-games">
          {this.state.gamesList}
        </ul>
        <button onClick={this.buttonHandler}>Load More</button>
      </div>
    );
  }
}

export default SearchGame;
