import { FormattedMessage } from "react-intl";

export default function MoviesNotFound() {
  return (
    <div className="h-96">
      <h3 className="p-5 font-extrabold text-3xl text-gray-900 lg:text-6xl md:text-5xl tracking-tight dark:text-white">
        <FormattedMessage
          id="app.moviesNotFound"
          defaultMessage="Movies not found!"
        />
      </h3>
    </div>
  );
}
