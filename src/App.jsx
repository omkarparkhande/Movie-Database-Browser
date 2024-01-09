import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const apiKey = "7ee6cc5e1e95b23f6f4d535c5a643c11";
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const apiKey = "7ee6cc5e1e95b23f6f4d535c5a643c11";
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );
      const data = await response.json();
      setMovies(data.results);
      setSearchQuery(query);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  return (
    <div className="container">
      <h1>Movie Database Browser</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
