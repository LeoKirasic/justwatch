import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieCardProps } from '../../ts/interfaces';

function MovieCard(props: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkIfFavorite = () => {
      props.favorites.forEach((favorite: any) => {
        if (favorite.id === props.id) {
          setIsFavorite(true);
        }
      });
    };
    checkIfFavorite();
  });

  const navigate = useNavigate();
  const viewMovieDetails = (e: any) => {
    e.preventDefault();
    navigate(`/movie/${e.target.dataset.id}`, {
      state: { movie: e.target.dataset.id },
    });
  };

  const handleFavorites = () => {
    if (isFavorite) {
      props.removeFromFavorites({
        id: props.id,
        title: props.title,
        poster_path: props.poster_path,
      });
      setIsFavorite(false);
    } else {
      props.addToFavorites({
        id: props.id,
        title: props.title,
        poster_path: props.poster_path,
      });
      setIsFavorite(true);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <img
        onClick={(e) => viewMovieDetails(e)}
        data-id={props.id}
        className='max-w-[100px] md:max-w-[150px] cursor-pointer'
        src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
        alt=''
      />
      {isFavorite ? (
        <input
          className='cursor-pointer mb-3'
          type='button'
          value='Remove'
          onClick={() => {
            handleFavorites();
          }}
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
  );
}

export default MovieCard;
