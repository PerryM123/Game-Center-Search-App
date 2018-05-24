import React, { Component } from 'react';
import SearchGame from './../components/SearchGame'
import { connect } from "react-redux";
import {increaseValue, decreaseValue} from './../actions/action';


// Map Redux state to component props
const mapStateToProps = (state, ownProps) => {
	return {
		gamesList: "",
		loading: true,
    	hasData: false
	}
}

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => {
	return {
		buttonHandler: () => dispatch 
	}
}

// Connecting container to the component
const GameSearchContainer = connect(
	mapStateToProps
	//,mapDispatchToProps // why is this causing errors???
)(SearchGame);
export default GameSearchContainer;
