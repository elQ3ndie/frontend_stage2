// MovieDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieApi from '../api/movieApi';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await movieApi.get(`/movie/${id}`);
        setMovieDetails(response.data); // Assuming your API endpoint supports fetching a movie by ID.
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 data-testid="movie-title">{movieDetails.title}</h1>
      <p data-testid="movie-release-date">Release Date (UTC): {movieDetails.release_date}</p>
      <p data-testid="movie-runtime">Runtime (minutes): {movieDetails.runtime}</p>
      <p data-testid="movie-overview">{movieDetails.overview}</p>
    </div>
  );
};

export default MovieDetails;
