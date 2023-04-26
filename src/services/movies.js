import movies from "../mocks/movies-result.json";
// https://omdbapi.com/
// API_KEY=4287ad07

export async function getMovies() {
  return movies.Search.map(({ Title, Poster, imdbID, Year, Type }) => ({
    title: Title,
    image: Poster,
    id: imdbID,
    year: Year,
    type: Type,
  }));
}
