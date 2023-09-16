import React, {useState, useEffect} from 'react'
import movieApi from '../api/movieApi'
import '../styles/Header.css'
import Imdb from '../assets/imdb.png'
import Rotten from '../assets/rotten-tomato.png'


const Header = () => {
    const [movie, setMovie] = useState([])

      useEffect(() => {

      async function fetchData() {
          try {
              const response = await movieApi.get('/movie/now_playing')
              setMovie(response.data.results[10]);

          } catch(error) {
              console.log(error)
          }
      }

      fetchData()
  }, [])



  return (
        <div className="header">
      
        <div className="header-content">

          <div className="header-poster">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>

          <div className="header-details">
            <h1>{movie.title}</h1>
            <div className='movie-rating'>
              <div>
                <img src={Imdb} alt='imdb' className='imdb'></img>
                <p>{movie.vote_average * 10}.0 / 100</p>
              </div>
              <div>
                <img src={Rotten} alt='rotten-tomato' className='rotten'></img>
                <p>93%</p>
              </div>
            </div>

            <p>{movie.overview}</p>
          </div>

        </div>
      
    </div>
  )
}

export default Header