// MovieCard.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import movieApi from '../api/movieApi';
import '../styles/MovieCard.css';

const MovieCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await movieApi.get('/movie/top_rated');
        setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="movie-header">
        <h1>Featured Movies</h1>
        <p className="see-more">see more</p>
      </div>

      <div className="movie-list">
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}> {/* Link to MovieDetails */}
            <div className="movie-card" data-testid="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                data-testid="movie-poster"
              />
              <h3 className="movie-title" data-testid="movie-title">{movie.title}</h3>
              <p className="movie-release-date" data-testid="movie-release-date">
                Release Date: {movie.release_date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
