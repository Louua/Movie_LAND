import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=3d1189de";

const App = () => {
  const [movies, setMovies] = useState([]); // Store fetched movies
  const [searchTerm, setSearchTerm] = useState(""); // Handle input value

  // Function to fetch movies based on the search term
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []); // Update state with fetched movies or an empty array if no results
  };

  useEffect(() => {
    searchMovies("Spiderman"); // Initial search
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      {/* Search Input Section */}
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)} // Trigger search on click
        />
      </div>
    </div>
    
  );
};

export default App;
