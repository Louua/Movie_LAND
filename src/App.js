import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=3d1189de";

const App = () => {
  const [movies, setMovies] = useState([]); // Store fetched movies
  const [searchTerm, setSearchTerm] = useState(""); // Handle input value
  const [loading, setLoading] = useState(false); // Track loading state

  // Function to fetch movies based on the search term
  const searchMovies = async (title) => {
    if (!title) return; // Avoid empty searches
    setLoading(true);
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if (data.Response === "True") {
      setMovies(data.Search || []); // Update state with fetched movies
    } else {
      setMovies([]); // No movies found, clear the movies list
    }
    setLoading(false);
  };

  // Trigger search when the user presses the enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm); // Trigger search when Enter is pressed
    }
  };

  // Trigger search when the user clicks the search icon
  const handleSearch = () => {
    searchMovies(searchTerm); // Trigger search on search icon click
  };

  // Initial search when the page loads
  useEffect(() => {
    searchMovies(""); // Initial search with an empty string for all movies
  }, []); // This effect is called only once on mount

  return (
    <div className="app">
      <h1>MovieLand</h1>

      {/* Search Input Section */}
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state
          onKeyPress={handleKeyPress} // Trigger search on Enter key press
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={handleSearch} // Trigger search on click
        />
      </div>

      <div className="container">
        {loading ? (
          <h2>Loading...</h2> // Show loading text while fetching movies
        ) : movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} /> // Pass each movie object to MovieCard
          ))
        ) : (
          <div className="empty">
            <h2>No movies found</h2>{" "}
            {/* Show message when no movies are found */}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
