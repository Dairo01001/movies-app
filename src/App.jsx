import { FormattedMessage } from "react-intl";
import "./App.css";
import Footer from "./components/Footer";
import { useMovies } from "./hooks/useSearch";
import { useState } from "react";
import MoviesCards from "./components/MoviesCards";
import Loading from "./components/Loading";

function App() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [search, setSearch] = useState("avengers");
  const { movies, types, loading } = useMovies({ typeFilter, search });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { search } = Object.fromEntries(new window.FormData(e.target));
    setSearch(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="w-full flex flex-col items-center ">
        <h1 className="p-5 font-extrabold text-4xl text-gray-900 lg:text-6xl md:text-5xl tracking-tight dark:text-white">
          <FormattedMessage id="app.title" defaultMessage="Movies App" />
        </h1>
        <form className="flex items-center w-96" onSubmit={handleSubmit}>
          <label htmlFor="search" className="sr-only">
            <FormattedMessage id="app.search" defaultMessage="Search" />
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onChange={handleChange}
              value={search}
              type="text"
              autoComplete="off"
              minLength="3"
              id="search"
              name="search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Matrix, Avengers, Tarzan, ..."
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2 -ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <FormattedMessage id="app.search" defaultMessage="Search" />
          </button>
        </form>
      </header>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {types.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setTypeFilter(type)}
            className="text-blue-700 capitalize hover:text-white border hover:border-gray-200 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            {type}
          </button>
        ))}
      </div>
      <main className="flex justify-center p-5">
        {loading ? <Loading /> : <MoviesCards movies={movies} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
