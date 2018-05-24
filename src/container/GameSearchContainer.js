import React, { Component } from 'react';
import SearchGame from './../components/SearchGame'
import { connect } from "react-redux";
import { increaseValue, decreaseValue } from './../actions/action';


// Map Redux state to component props
const mapStateToProps = (state) => {
	return {
		gamesList: state.gamesList,
		loading: state.loading,
    	hasData: state.hasData
	}
}

// Not sure how mapDispatchToProps() works...
//Maybe I don't need mapDispatchToProps() in this case

// Map Redux actions to component props
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		buttonHandler: () => dispatch 
// 	}
// }

const GameSearchContainer = connect(
	mapStateToProps
	//,mapDispatchToProps // why is this causing errors???
)(SearchGame);
export default GameSearchContainer;
