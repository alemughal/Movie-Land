import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import searchIcon from "./search.svg";
import "./App.css";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=a70530df";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  console.log(movies);

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
            <MovieCard key={movie.imdbID} movie={movie}/>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};



export default App;
