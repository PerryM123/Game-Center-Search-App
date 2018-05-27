import { START_LOADING, FINISH_LOADING } from './../constants/action-types';

export const startLoading = () => ({
	type: START_LOADING
});

export const finishLoading = ( loadedGames ) => ({
	type: FINISH_LOADING,
	// Question!!!
	// payload: { loadedGames } <--- using brackets here caused an error. What is the difference between brackets and no brackets
	payload: loadedGames
});
