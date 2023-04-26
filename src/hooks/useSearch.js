import { useEffect, useMemo, useState } from "react";
import { getMovies } from "../services/movies";

export const ALL = "all";

export function useMovies({ typeFilter }) {
  const [movies, setMovies] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function callApi() {
      try {
        setLoading(true);
        const moviesRes = await getMovies();
        setMovies(moviesRes);
        const typesRes = new Set(moviesRes.map(({ type }) => type));
        setTypes([ALL, ...typesRes]);
      } catch (error) {
        setError("Movies not found");
      } finally {
        setLoading(false);
      }
    }
    callApi();
  }, []);


  const moviesFilter = useMemo(
    () =>
      movies.filter(({ type }) =>
        typeFilter === ALL ? true : type === typeFilter
      ),
    [typeFilter, movies]
  );

  return { types: types, movies: moviesFilter, loading, error };
}
