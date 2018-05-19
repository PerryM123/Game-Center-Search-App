import React, { Component } from 'react';
import axios from 'axios';
/*
* React Question:
* So in this project, to avoid overloading the render function,
* I move the logic out to a separate function. But wouldn't it also be possible to
* make these into their own components?
*
* How do I make the decision between between:
* 1) making another functions for the logic
* and
* 2) making a component to have that logic (maybe this leads into smart components)
*
* Does it become:
* If it needs to be rendered, it should be it's own component?
* If it is ONLY logic, then it should be a function?
*/

class ArcadePage extends Component {
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
        arcadeList: results.data.arcades
      });
      if ( results.data.arcades ) {
        const arcadeMatchList = results.data.arcades.filter((arcade) =>
          arcade.arcade_id === this.props.match.params.arcade_id
        );

        this.setState({
          arcadeList: arcadeMatchList
        });
      }
    });
  }
  render() {
    const ourArcade = this.props.match.params.arcade_id; // game in parameter
    console.log("this.state.arcadeList");
    console.log(this.state.arcadeList);
    return (
      <div className="contents contents--arcade-page">
        <h2>cade Page: {ourArcade}</h2>
        { this.state.arcadeList ? this.state.arcadeList.map((arcadeData)=> {
          return (
            <div>
              <p><b>arcade_id:</b> {arcadeData.arcade_id}</p>
              <p><b>description:</b> {arcadeData.description}</p>
              <img style={{width: "100%"}} src={arcadeData.arcade_img_full} alt="arcade data shown" />
            </div>
          )
        }) : null }
      </div>
    );
  }
}

export default ArcadePage;
