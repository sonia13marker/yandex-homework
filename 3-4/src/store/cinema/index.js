import { createSlice } from '@reduxjs/toolkit';
import {Statuses} from '../../constants/statuses.js';
import { bookshelf } from '../../constants/mock.js';

const initialState =  {
		entities: { bookshelf },
		ids: [],
		status: Statuses.success,
	};

export const bookshelfSlice = createSlice( {

	name: 'genre',
	initialState,
	reducers: {
		startLoading: (state, action) => {
			state.status = Statuses.inProgress;
			state.entities = {};
			state.ids = [];
		},
		successLoading: (state, action) => {
			state.status = Statuses.success;
			state.entities = action.payload.entities;
			state.ids = action.payload.ids;
		},
		failLoading: (state, action) => {
			state.status = Statuses.failed;
			state.entities = {};
			state.ids = [];
		},

	},
} )

console.log(bookshelf[0].books[1].name);