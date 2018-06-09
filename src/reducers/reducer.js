import axios from 'axios';
import {
	GAME_START_LOADING, 
	GAME_FINISH_LOADING, 
	GAME_LOADING_ERROR,
	ARCADE_START_LOADING, 
	ARCADE_FINISH_LOADING,
	ARCADE_LOADING_ERROR
} from './../constants/action-types';

const gamesInitialState = {
	gamesList: "",
	selectedGame: "",
	gamesLoading: true,
	gamesHasData: false
}

const arcadesInitialState = {
	arcadesList: "",
	selectedArcade: "",
	arcadesLoading: true,
	arcadesHasData: false
}

export const gameListReducer = ( state = gamesInitialState, action ) => {
  	console.log("gameListReducer: action was:");
  	console.log(action);
    switch ( action.type ) {
	    case GAME_START_LOADING:
	    console.log("case GAME_START_LOADING");
	    console.log("state.hasData: ", state.hasData)
	    	if ( state.gamesHasData ) {
	    		// data already loaded
	    		return state;
	    	}
				return Object.assign({}, state, {
					gamesList: "",
					gamesLoading: true,
					gamesHasData: false
	      });
	    case GAME_FINISH_LOADING:
	    console.log("case GAME_FINISH_LOADING");
			  return Object.assign({}, state, {
					gamesList: action.payload,
					gamesLoading: false,
					gamesHasData: true
	      });
	    case GAME_LOADING_ERROR:
	    console.log("case GAME_LOADING_ERROR");
			  return Object.assign({}, state, {
					gamesLoading: false,
	      });
	    default:
	    console.log("case default");
	    	return state;
    }
};

export const arcadeListReducer = ( state = arcadesInitialState, action ) => {
  	console.log("arcadeListReducer: action was:");
  	console.log(action);
    switch ( action.type ) {
	    case ARCADE_START_LOADING:
	    console.log("case ARCADE_START_LOADING");
	    	if ( state.arcadesHasData ) {
	    		// data already loaded
	    		return state;
	    	}
				return Object.assign({}, state, {
					arcadesList: "",
					arcadesLoading: true,
					arcadesHasData: false
	      });
	    case ARCADE_FINISH_LOADING:
	    console.log("case ARCADE_FINISH_LOADING");
			  return Object.assign({}, state, {
					arcadesList: action.payload,
					arcadesLoading: false,
					arcadesHasData: true
	      });
	    case ARCADE_LOADING_ERROR:
	    console.log("case ARCADE_LOADING_ERROR");
			  return Object.assign({}, state, {
					arcadesLoading: false,
	      });
	    default:
	    console.log("case default");
	    	return state;
    }
};
