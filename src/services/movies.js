export async function getMovies({ search }) {
  try {
    const res = await fetch(`https://omdbapi.com/?apikey=4287ad07&s=${search}`);
    const data = await res.json();

    return data.Search.map(({ Title, Poster, imdbID, Year, Type }) => ({
      title: Title,
      image: Poster,
      id: imdbID,
      year: Year,
      type: Type,
    }));
  } catch (error) {
    throw new Error("Error searching movies");
  }
}
