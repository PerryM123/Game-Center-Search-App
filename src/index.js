import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import './index.css';
import App from './App';
import { gameListReducer, arcadeListReducer } from './reducers/reducer';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

// Combine reducers
const reducer = combineReducers({
    games: gameListReducer,
    arcades: arcadeListReducer
});

// Create store
const store = createStore(reducer);


// Report changes in store's state
store.subscribe(() => {
	console.log("storeChanged: ", store.getState());
});

ReactDOM.render(
<Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</Provider>
	, document.getElementById('root'));
registerServiceWorker();
