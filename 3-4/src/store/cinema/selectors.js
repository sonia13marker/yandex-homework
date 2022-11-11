export const selectBookshelfModule = (state) => state.bookshelf;

//селектор, который возвращает наши жанры 
export const selectBookshelfs = (state) => Object.values(selectBookshelfModule(state).entities);

export const selectBookshelfById = (state, bookshelfId) => selectBookshelfModule(state).entities[bookshelfId];


export const selectBookshelfsBookIds = (state, bookshelfId) => selectBookshelfModule(state).entities[bookshelfId].books;
