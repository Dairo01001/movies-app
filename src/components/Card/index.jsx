import PropTypes from "prop-types";

export default function Card({ movie }) {
  const { image, title, id, year } = movie;
  
  return (
    <div
      key={id}
      className="max-w-sm bg-white border flex flex-col border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <img className="rounded-t-lg" src={image} alt={title} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {year}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  movie: PropTypes.objectOf(PropTypes.shape).isRequired,
};
