import { useEffect, useState } from "react";
import MovieCard from "./MovieCard.jsx";
import "./App.css";
import searchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=35573564";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="App">
      <h1>Moviemania</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="search icon"
          onClick={() => {
            searchMovies(search);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="container">
          <h2>Movie not found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
