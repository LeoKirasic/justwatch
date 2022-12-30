import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../shared/Nav';
import { Movie } from '../../ts/interfaces';

type MovieDetailsProps = {
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movie: Movie) => void;
  favorites: Movie[];
};

function MovieDetails(props: any) {
  const [movie, setMovie] = useState<any>([]);
  const location = useLocation();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkIfFavorite = () => {
      props.favorites.forEach((favorite: any) => {
        if (favorite.id === movie.id) {
          setIsFavorite(true);
        }
      });
    };
    checkIfFavorite();
  });

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${location.state.movie}?api_key=2e5db5afde79d3887eb3a3855d6253d6&language=en-US`
        );
        const movie = await data.json();
        setMovie(movie);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [movie]);

  const handleFavorites = () => {
    if (isFavorite) {
      props.removeFromFavorites({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
      });
      setIsFavorite(false);
    } else {
      props.addToFavorites({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
      });
      setIsFavorite(true);
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className=' 2xl:text-3xl'>
        <Nav favorites={props.favorites}></Nav>
        <img
          className='absolute top-0 left-0 w-full h-screen object-cover opacity-50 z-[-1]'
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=''
        />
        <div className='flex justify-center'>
          <div>
            <div className='flex flex-col items-center max-w-[300px] min-w-[150px]'>
              <img
                className='w-[300px]'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=''
              />
              {isFavorite ? (
                <input
                  className='cursor-pointer mb-3 '
                  type='button'
                  value='Remove'
                  onClick={() => handleFavorites()}
                />
              ) : (
                <input
                  className='cursor-pointer mb-3'
                  type='button'
                  value='Add'
                  onClick={() => handleFavorites()}
                />
              )}
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl 2xl:text-5xl'>{movie.title}</h1>
            <div className='flex gap-3'>
              <p>{movie.release_date}</p>
              <p>{movie.vote_average}</p>
            </div>
            <div className='flex gap-2'>
              {movie.genres &&
                movie.genres.map((genre: any) => {
                  return <p key={genre.id}>{genre.name}</p>;
                })}
            </div>
            <p className='font-medium text-lg 2xl:text-4xl'>{movie.tagline}</p>
            <p className=' break-words'>{movie.overview}</p>
            <div className='flex'>
              <p>DURATION:</p>
              <p>{movie.runtime} min</p>
            </div>
            <div className='flex gap-2'>
              <p>STUDIO:</p>
              {movie.production_companies &&
                movie.production_companies.map((company: any) => {
                  return <p key={company.id}>{company.name}</p>;
                })}
            </div>
            <p>{movie.release_date}</p>
            <div className='flex'>
              <p>STATUS:</p>
              <p>{movie.status}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
