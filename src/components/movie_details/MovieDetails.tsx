import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../shared/Nav';

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
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${location.state.movie}?api_key=2e5db5afde79d3887eb3a3855d6253d6&language=en-US`
      );
      const movie = await data.json();
      setMovie(movie);
    };
    fetchMovie();
  }, [movie]);

  if (!movie) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Nav favorites={props.favorites}></Nav>
        <img
          className='absolute top-0 left-0 w-full h-screen object-cover opacity-50 z-[-1]'
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=''
        />
        <div className='flex justify-center'>
          <img
            className='w-[300px]'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=''
          />
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl'>{movie.title}</h1>

            {isFavorite ? (
              <input
                type='button'
                value='Remove from favorites'
                onClick={() => {
                  props.removeFromFavorites(
                    {
                      id: movie.id,
                      title: movie.title,
                    },
                    setIsFavorite(false)
                  );
                }}
              />
            ) : (
              <input
                className='cursor-pointer'
                type='button'
                value='Add to favorites'
                onClick={() =>
                  props.addToFavorites(
                    {
                      id: movie.id,
                      title: movie.title,
                    },
                    setIsFavorite(true)
                  )
                }
              />
            )}

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
            <p className='font-medium text-lg'>{movie.tagline}</p>
            <p>{movie.overview}</p>
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
