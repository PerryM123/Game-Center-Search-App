import axios from 'axios';
import {START_LOADING, FINISH_LOADING} from './../constants/action-types';

const initialState = {
	gamesList: "",
	loading: true,
	hasData: false
}

const reducer = ( state = initialState, action ) => {
  	console.log("action was:");
  	console.log(action);
    switch ( action.type ) {
	    case START_LOADING:
	    	if ( state.hasData ) {
	    		// data already loaded
	    		return state;
	    	}
				return Object.assign({}, state, {
					gamesList: "",
					loading: true,
					hasData: false
	      });
	    case FINISH_LOADING:
			  return Object.assign({}, state, {
					gamesList: action.payload,
					loading: false,
					hasData: true
	      });
	    default:
	    	return state;
    }
};

export default reducer;
