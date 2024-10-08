"use client";

import type {MovieResume} from "@/Schemas/response/MovieResume";

import {useState} from "react";

import {useMoviesStore} from "@/store/movies-store";
import {cn} from "@/utils";
import {addFavoriteMovie as addFavoriteMovieService} from "@/services/FavoriteMovies";
interface FavoriteButtonProps {
  movie: MovieResume;
  className?: string;
}

export function FavoriteButton({movie, className = "size-10"}: FavoriteButtonProps) {
  const {existsMovieInFavorites, addFavoriteMovie, removeFavoriteMovie} = useMoviesStore();
  const [fetching, setFetching] = useState(false);

  return (
    <button
      className="flex flex-col items-center text-center"
      disabled={fetching}
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        setFetching(true);
        addFavoriteMovieService({
          favorite: !existsMovieInFavorites(movie.id),
          media_id: movie.id,
          media_type: "movie",
        })
          .then(() => {
            if (existsMovieInFavorites(movie.id)) {
              removeFavoriteMovie(movie);
            } else {
              addFavoriteMovie(movie);
            }
          })
          .finally(() => setFetching(false));
      }}
    >
      <svg
        className={cn("cursor-pointer", className)}
        fill={existsMovieInFavorites(movie.id) || movie.isFavorite ? "#F00" : "#FFF"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
      </svg>
    </button>
  );
}
