import { Statuses } from '../../constants/statuses';


export const selectBookModule = (state) => state.book;


//селектор, который возвращает наши книги
export const selectBooks = (state) => Object.values(selectBookModule(state).entities);

export const selectBookById = (state, bookId) => selectBookModule(state).entities[bookId];

export const selectIsBooksLoading = (state) => selectBookModule(state).status === Statuses.inProgress;