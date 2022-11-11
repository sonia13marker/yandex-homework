export const selectGenreModule = (state) => state.genre;


//селлектор, который возвращает наши жанры 
export const selectGenres = (state) => Object.keys(selectGenreModule(state).entities);