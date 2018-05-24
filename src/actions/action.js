import { START_LOADING, FINISH_LOADING } from './../constants/action-types';

export const startLoading = () => ({
	type: START_LOADING
});

export const finishLoading = ( loadedGames ) => ({
	type: FINISH_LOADING,
	payload: { loadedGames }
});
