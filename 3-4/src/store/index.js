import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bookshelfSlice } from './cinema';
import { bookSlice } from './book';
import {bookshelfs} from '../constants/mock';
import { cartSlice } from './cart';
import { reviewSlice } from './review';

export const store = configureStore({
	reducer: combineReducers({
		bookshelf: bookshelfSlice.reducer,
		book: bookSlice.reducer,
		cart: cartSlice.reducer,
		review: reviewSlice.reducer,


	}),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
console.log(store.getState())