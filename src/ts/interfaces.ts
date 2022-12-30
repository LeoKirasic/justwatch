export interface Genre {
  id: number;
  results: Array<Movie>;
  movies: Movie[];
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export interface DefaultProps {
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movie: Movie) => void;
  favorites: Movie[];
}

export interface MovieCardProps extends DefaultProps {
  id: number;
  title: string;
  poster_path: string;
  favorites: Movie[];
}
