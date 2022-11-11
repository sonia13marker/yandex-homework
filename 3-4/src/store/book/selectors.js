export const selectGenreModule = (state) => state.genre;


//селлектор, который возвращает наши жанры 
export const selectGenres = (state) => Object.values(selectGenreModule(state).entities);