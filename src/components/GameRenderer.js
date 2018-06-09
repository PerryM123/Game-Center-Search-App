import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loading_logo from './../images/loading_icon.png';

class GameRenderer extends Component {
  render() {
  	let gameStuff = "";
  	if (this.props.gameData) {
	    gameStuff = this.props.gameData.map((data, num)=> {
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
	  }
    return gameStuff;
  }
}
export default GameRenderer;
