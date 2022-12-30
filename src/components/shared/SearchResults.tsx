import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './Nav';
import MovieCard from '../discovery/MovieCard';
import { DefaultProps, Movie } from '../../ts/interfaces';

function SearchResult(props: DefaultProps) {
  const location = useLocation();
  const [Movies, setMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    const query = location.state.query;
    const fetchMoviesBySearchParam = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3//search/movie?api_key=2e5db5afde79d3887eb3a3855d6253d6&query=${query}`
      );
      const movies = await data.json();
      setMovies(movies.results);
      console.log(location.state);
    };
    fetchMoviesBySearchParam();
  }, [location.state.query]);

  return (
    <div>
      <Nav favorites={props.favorites}></Nav>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-10 xl:grid-cols-5 justify-center'>
        {Movies.map((movie) => {
          return (
            <MovieCard
              favorites={props.favorites}
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              addToFavorites={props.addToFavorites}
              removeFromFavorites={props.removeFromFavorites}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
