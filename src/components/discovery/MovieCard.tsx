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

  const HandleFavorites = () => {
    props.removeFromFavorites({
      id: props.id,
      title: props.title,
      poster_path: props.poster_path,
    });
  };

  return (
    <div className='flex flex-col'>
      <img
        onClick={(e) => viewMovieDetails(e)}
        data-id={props.id}
        className='max-w-[200px] cursor-pointer'
        src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
        alt=''
      />
      {isFavorite ? (
        <input
          type='button'
          value='Remove from favorites'
          onClick={() => {
            props.removeFromFavorites(
              {
                id: props.id,
                title: props.title,
                poster_path: props.poster_path,
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
                id: props.id,
                title: props.title,
                poster_path: props.poster_path,
              },
              setIsFavorite(true)
            )
          }
        />
      )}
    </div>
  );
}

export default MovieCard;
