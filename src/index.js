import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import reducer from './reducers/reducer';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

// Create store
const store = createStore(reducer);

/*
Test store

With test store you can use:
console.log(testStore.getState()) 
to see the state of the store
*/
window.testStore = store;

const LOAD_DATA = 'LOAD_DATA';

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
	<App />
</BrowserRouter>
</Provider>
	, document.getElementById('root'));
registerServiceWorker();
