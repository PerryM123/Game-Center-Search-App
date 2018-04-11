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
          // Trying to fix this
          // Use this as reference: https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
          // There needs to be another router connected here.
        const link = "/search-game/" + data.game_id;
        return (
          <li key={num}>
            <Link to={link}>
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
