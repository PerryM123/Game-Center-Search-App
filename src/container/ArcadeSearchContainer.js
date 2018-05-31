import React, { Component } from 'react';
import SearchGame from './../components/SearchGame'
import { connect } from "react-redux";
import ArcadePage from './../components/ArcadePage';

// Map Redux state to component props
const mapStateToProps = (state) => {
	return {
		arcadesList: state.arcades.arcadesList,
		arcadesLoading: state.arcades.arcadesLoading,
    	arcadesHasData: state.arcades.arcadesHasData
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

const ArcadeSearchContainer = connect(
	mapStateToProps
	//,mapDispatchToProps // why is this causing errors???
)(ArcadePage);
export default ArcadeSearchContainer;