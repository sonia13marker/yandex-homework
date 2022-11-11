import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bookshelfSlice } from './cinema';
import { bookSlice } from './book';

export const store = configureStore({
	reducer: combineReducers({
		genre: bookshelfSlice.reducer,
		book: bookSlice.reducer,
		// book: bookSlice.reducer,

	}),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

console.log(store.getState());