import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ArcadeResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arcadeData: "",
      gamesList: [""]
    }
  }
  componentDidMount() {
    axios.get('/arcadeData.json')
     .then((results) => {
      this.setState({
        gamesList: results.data.arcades
      });
      const arcadeList = results.data.arcades.map((data, num)=> {
        return (
          <li key={num}>
            <img src={data.arcade_img_thumbnail}/>
            <p>{data.arcade_name}</p>
          </li>
        );
      });

      this.setState({
        arcadeData: arcadeList
      });
     });
  }
  render() {
    const ourGame = this.props.match.params.id; // game in parameter 
    // arrNAme.find(ourGame) 

    return (
      <div className="contents contents--arcade-results">
        <h2>Arcade Search: {ourGame}</h2>
        <h3>Hmm: {
          this.state.gamesList.map((item,i)=>{
            console.log(item);
            return <div key={i}>{item.arcade_name}</div>
          })
        }</h3>
        <p>
        </p>
        <ul>
          {/*this.state.arcadeData*/}
        </ul>
      </div>
    );
  }
}

export default ArcadeResults;
