import { bookshelfs } from '../../constants/mock.js';

export const selectReviewModule = (state) => state.bookshelfs.review;


//селектор, который возвращает наши reviews 
export const selectReview = (state) => Object.values(selectReviewModule(state).entities);

export const selectReviewById = (state, reviewId) => selectReviewModule(state).entities[reviewId];
