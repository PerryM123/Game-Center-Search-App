import React, { Component } from 'react';
import SearchGame from './../components/SearchGame'
import { connect } from "react-redux";


// Map Redux state to component props
const mapStateToProps = (state) => {
	return {
		arcadeList: state.arcadeList,
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

const ArcadeSearchContainer = connect(
	mapStateToProps
	//,mapDispatchToProps // why is this causing errors???
)(SearchGame);
export default ArcadeSearchContainer;
