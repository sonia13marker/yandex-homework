export const selectGenreModule = (state) => state.bookshelf;

//селектор, который возвращает наши жанры 
export const selectGenres = (state) => Object.values(selectGenreModule(state).entities);


export const selectGenresBookIds = (state, bookshelfId) => selectGenreModule(state).entities[bookshelfId].books;
