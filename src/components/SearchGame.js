import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SearchGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: ""
    }
  }
  componentDidMount() {
    axios.get('gameData.json')
     .then((results) => {
      const gamesList = results.data.games.map((data, num)=> {
        return (
          <li key={num}>
            <Link to='/well/aa'>
              <img src={data.game_img_thumbnail}/>
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
  render() {
    return (
      <div className="contents contents--search-game">
        <h2>Search By Game</h2>
        <ul>
          {this.state.gamesList}
        </ul>
        <button>Load More</button>
      </div>
    );
  }
}

export default SearchGame;
