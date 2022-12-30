import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { DefaultProps, Genre, Movie } from '../../ts/interfaces';

const MovieList = (props: DefaultProps) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  const fetchGenreData = async ({ id, name }: any): Promise<Genre> => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=2e5db5afde79d3887eb3a3855d6253d6&with_genres=${id}`
      );
      const data = await response.json();
      return { ...data, name };
    } catch (error) {
      console.error(error);
    }
    return { name: '', movies: [], id: 0, results: [] };
  };

  const fetchAllGenreData = (
    genreIds: { id: number; name: string }[]
  ): Promise<Genre[]> => {
    const promises = genreIds.map((genre: any) => fetchGenreData(genre));
    return Promise.all(promises);
  };

  useEffect(() => {
    const genreIds = [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 16, name: 'Animation' },
      { id: 35, name: 'Comedy' },
      { id: 80, name: 'Crime' },
      { id: 99, name: 'Documentary' },
      { id: 18, name: 'Drama' },
      { id: 10751, name: 'Family' },
      { id: 14, name: 'Fantasy' },
      { id: 36, name: 'History' },
      { id: 27, name: 'Horror' },
      { id: 10402, name: 'Music' },
      { id: 9648, name: 'Mystery' },
      { id: 10749, name: 'Romance' },
      { id: 878, name: 'Science Fiction' },
      { id: 10770, name: 'TV Movie' },
      { id: 53, name: 'Thriller' },
      { id: 10752, name: 'War' },
      { id: 37, name: 'Western' },
    ];
    fetchAllGenreData(genreIds).then((genres) => setGenres(genres));
  }, []);

  if (genres === undefined) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {genres.map((genre) => (
          <div key={genre.id}>
            <h2 className='font-bold text-lg'>{genre.name}</h2>
            <ul className='flex overflow-x-auto w-[1000px]'>
              {genre.results.map((movie) => (
                <li key={movie.id}>
                  <MovieCard
                    favorites={props.favorites}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    addToFavorites={props.addToFavorites}
                    removeFromFavorites={props.removeFromFavorites}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
};

export default MovieList;
