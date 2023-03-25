import React, { useEffect } from "react";
// import searchIcon from "./search.svg";
import "./App.css"; 


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=a70530df';

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if(data.Response === 'True') {
      console.log(data.Search);
    }
  };
  
    useEffect(() => {
      searchMovies('Spiderman');
    }, []);
    


  return (
    <div className="app">
      <h1>Hello World</h1>
    </div>
  );
};

export default App;