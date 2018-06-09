import {
	GAME_START_LOADING, 
	GAME_FINISH_LOADING, 
	GAME_LOADING_ERROR,
	ARCADE_START_LOADING, 
	ARCADE_FINISH_LOADING,
	ARCADE_LOADING_ERROR
} from './../constants/action-types';

export const gameStartLoading = () => ({
	type: GAME_START_LOADING
});

export const gameFinishLoading = ( loadedGames ) => ({
	type: GAME_FINISH_LOADING,
	// Question!!!
	// payload: { loadedGames } <--- using brackets here caused an error. What is the difference between brackets and no brackets
	payload: loadedGames
});

export const gameLoadingError = () => ({
	type: GAME_LOADING_ERROR
});



export const arcadeStartLoading = () => ({
	type: ARCADE_START_LOADING
});

export const arcadeFinishLoading = ( loadedArcades ) => ({
	type: ARCADE_FINISH_LOADING,
	payload: loadedArcades
});

export const arcadeLoadingError = () => ({
	type: ARCADE_LOADING_ERROR
});
