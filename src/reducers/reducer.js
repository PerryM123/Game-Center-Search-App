import axios from 'axios';
import {GAME_START_LOADING, GAME_FINISH_LOADING, ARCADE_START_LOADING, ARCADE_FINISH_LOADING} from './../constants/action-types';

const gamesInitialState = {
	gamesList: "",
	gamesLoading: true,
	gamesHasData: false
}

const arcadesInitialState = {
	arcadesList: "",
	arcadesLoading: true,
	arcadesHasData: false
}

export const gameListReducer = ( state = gamesInitialState, action ) => {
  	console.log("gameListReducer: action was:");
  	console.log(action);
    switch ( action.type ) {
	    case GAME_START_LOADING:
	    console.log("case GAME_START_LOADING");
	    	if ( state.hasData ) {
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
	    	if ( state.hasData ) {
	    		// data already loaded
	    		return state;
	    	}
				return Object.assign({}, state, {
					arcadesList: "",
					arcadesloading: true,
					arcadeshasData: false
	      });
	    case ARCADE_FINISH_LOADING:
	    console.log("case ARCADE_FINISH_LOADING");
			  return Object.assign({}, state, {
					arcadesList: action.payload,
					arcadesloading: false,
					arcadeshasData: true
	      });
	    default:
	    console.log("case default");
	    	return state;
    }
};
