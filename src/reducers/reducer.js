
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loading_logo from './../images/loading_icon.png';


import axios from 'axios';
import {START_LOADING, FINISH_LOADING} from './../constants/action-types';

const initialState = {
	gamesList: "",
	loading: true,
	hasData: false
}

let gameStuff = "";

const reducer = ( state = initialState, action ) => {
  	console.log("action was:");
  	console.log(action);
    switch ( action.type ) {
        case START_LOADING:
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
        	console.log("default starts:");
        	return state;
    }
};

export default reducer;
