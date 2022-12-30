import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard(props: any) {
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

  return (
    <div className='flex flex-col'>
      <img
        onClick={(e) => viewMovieDetails(e)}
        data-id={props.id}
        className='max-w-[200px] cursor-pointer'
        src={`https://image.tmdb.org/t/p/w500${props.img}`}
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
                img: props.img,
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
                img: props.img,
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
