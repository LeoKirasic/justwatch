import React from 'react';
import Nav from '../shared/Nav';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import { Movie, DefaultProps } from '../../ts/interfaces';
function DiscoveryPage(props: DefaultProps) {
  const [movies, setMovies] = React.useState<Array<Movie>>([]);

  React.useEffect(() => {
    const fetchLatestMovies = async () => {
      try {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming?api_key=2e5db5afde79d3887eb3a3855d6253d6&language=en-US&page=1'
        );
        const movies = await data.json();
        setMovies(movies.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLatestMovies();
  }, []);

  return (
    <div className='font-lato flex flex-col align-center justify-center'>
      <Nav favorites={props.favorites}></Nav>
      <h1 className='font-bold text-lg'>Upcoming movies</h1>
      <ul className='flex overflow-x-auto w-[1000px] gap-4'>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieCard
                favorites={props.favorites}
                addToFavorites={props.addToFavorites}
                removeFromFavorites={props.removeFromFavorites}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
              />
            </li>
          );
        })}
      </ul>
      <MovieList
        addToFavorites={props.addToFavorites}
        removeFromFavorites={props.removeFromFavorites}
        favorites={props.favorites}
      ></MovieList>
    </div>
  );
}

export default DiscoveryPage;
