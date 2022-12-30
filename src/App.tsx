import React, { useEffect, useState } from 'react';
import HomePage from './components/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import DiscoveryPage from './components/discovery/DiscoveryPage';
import SearchResults from './components/shared/SearchResults';
import MovieDetails from './components/movie_details/MovieDetails';
import { Movie } from './ts/interfaces';
function App() {
  const [favorites, setFavorites] = useState<Movie[]>(
    localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites') || '')
      : []
  );

  const addToFavorites = (movie: Movie) => {
    if (movie === null) return;
    setFavorites([...favorites, movie]);
  };

  const removeFromFavorites = (movie: Movie) => {
    const newFavorites = favorites.filter(
      (favorite: Movie) => favorite.id !== movie.id
    );
    setFavorites(newFavorites);
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className='flex flex-col items-center  font-lato'>
      <Routes>
        <Route
          path='/'
          element={<HomePage favorites={favorites}></HomePage>}
        ></Route>
        <Route
          path='/discover'
          element={
            <DiscoveryPage
              addToFavorites={addToFavorites}
              favorites={favorites}
              removeFromFavorites={removeFromFavorites}
            ></DiscoveryPage>
          }
        ></Route>
        <Route
          path='/movie/:id'
          element={
            <MovieDetails
              addToFavorites={addToFavorites}
              favorites={favorites}
              removeFromFavorites={removeFromFavorites}
            ></MovieDetails>
          }
        ></Route>
        <Route
          path='/search/:q'
          element={
            <SearchResults
              addToFavorites={addToFavorites}
              favorites={favorites}
              removeFromFavorites={removeFromFavorites}
            ></SearchResults>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
