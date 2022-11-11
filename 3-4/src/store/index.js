import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bookshelfSlice } from './cinema';

export const store = configureStore({
	reducer: combineReducers({
		genre: bookshelfSlice.reducer,
		// book: bookSlice.reducer,

	}),
	//middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

console.log(store.getState());