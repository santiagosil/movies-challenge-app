"use client";
import type {MovieResume} from "@/Schemas/response/MovieResume";

import {create} from "zustand";
import {persist} from "zustand/middleware";

interface MoviesStore {
  movies: MovieResume[];
  favoritesMovies: MovieResume[];
  setMovies: (movies: MovieResume[]) => void;
  setFavoritesMovies: (movies: MovieResume[]) => void;
  removeFavoriteMovie: (movie: MovieResume) => void;
  addFavoriteMovie: (movie: MovieResume) => void;
  existsMovieInFavorites: (movieId: number) => boolean;
}

export const useMoviesStore = create<MoviesStore>()(
  persist(
    (set, get) => ({
      movies: [],
      favoritesMovies: [],
      setMovies: (movies: MovieResume[]) => set({movies}),
      setFavoritesMovies: (movies: MovieResume[]) => set({favoritesMovies: movies}),
      removeFavoriteMovie: (movie: MovieResume) => {
        const movies = get().favoritesMovies.filter((movieResume) => movieResume.id !== movie.id);

        return set({favoritesMovies: movies});
      },
      addFavoriteMovie: (movie: MovieResume) => {
        return set({favoritesMovies: [...get().favoritesMovies, movie]});
      },
      existsMovieInFavorites: (movieId: number) => {
        const movieFinded = get().favoritesMovies.find((movieResume) => movieResume.id === movieId);

        return movieFinded ? true : false;
      },
    }),
    {
      name: "movies-store",
    },
  ),
);
