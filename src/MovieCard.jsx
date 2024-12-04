import React from "react";
const MovieCard = ({movie}) => {
    return (
        <div className="container">
{movies.length > 0 ? (
  movies.map((movie) => (
    <div key={movie.imdbID} className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  ))
) : (
  <div className="empty">
    <h2>No movies found</h2>
  </div>
)}
</div>
     );
}
export default MovieCard ;