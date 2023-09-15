import React from 'react'
import { useState, useEffect } from 'react';
import MovieApi from '../api/movieApi'
import '../styles/MovieCard.css'

const MovieCard = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {

      async function fetchData() {
          try {
              const response = await MovieApi.get('/movie/top_rated')
              setMovies(response.data.results.slice(0,10))

          } catch(error) {
              console.log(error)
          }
      }

      fetchData()
  }, [])


  return (
    <div className="movie-list">
    {movies.map((movie) => (
      <div key={movie.id} className="movie-card" data-testid="movie-card">
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
    ))}
  </div>

  )
}

export default MovieCard