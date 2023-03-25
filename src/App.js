import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import searchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a70530df";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Response === "True") {
      setMovies(data.Search);
    }
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={search}
          onChange={(e) => setSearch (e.target.value)}
        />
        <img src={searchIcon} 
        alt="search-icon" 
        onClick={() => searchMovies(search)} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
