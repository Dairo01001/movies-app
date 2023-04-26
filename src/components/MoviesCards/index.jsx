import Card from "../Card";
import PropTypes from "prop-types";
import MoviesNotFound from "../MoviesNotFound";

export default function MoviesCards({ movies }) {
  return movies.length !== 0 ? (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  ) : (
    <MoviesNotFound />
  );
}

MoviesCards.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
