import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getMovies } from "../services/movies";
import debounce from "just-debounce-it";

export const ALL = "all";

export function useMovies({ typeFilter, search }) {
  const [movies, setMovies] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchRef = useRef(search);

  const debouncedGetMovies = useCallback(
    debounce(async (search) => {
      try {
        setLoading(true);
        setError(null);
        const moviesRes = await getMovies({ search });
        setMovies(moviesRes);
        const typesRes = new Set(moviesRes.map(({ type }) => type));
        setTypes([ALL, ...typesRes]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }, 250),
    []
  );

  useEffect(() => {
    if (searchRef.current === search) return;
    debouncedGetMovies(search);
  }, [search, debouncedGetMovies]);

  const moviesFilter = useMemo(
    () =>
      movies.filter(({ type }) =>
        typeFilter === ALL ? true : type === typeFilter
      ),
    [typeFilter, movies]
  );

  return { types, movies: moviesFilter, loading, error };
}
