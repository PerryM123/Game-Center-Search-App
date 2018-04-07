import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleArcadeSearchClick = this.handleArcadeSearchClick.bind(this);
    this.handleGameSearchClick = this.handleGameSearchClick.bind(this);
  }

  handleArcadeSearchClick() {
    console.log("Arcade Search clicked");
  }
  handleGameSearchClick() {
    console.log("Game Search clicked");
  }

  render() {
    return (
      <div>
        <div>
          <Link to='/find-game'>Search for Arcade near me></Link>  
        </div>
        <div>
          <Link to='/live-map'>Search for Game</Link>
        </div>
      </div>
    );
  }
}

export default App;
