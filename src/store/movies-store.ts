import type { MovieResume } from "@/Schemas/request/MovieResume";

import { create } from "zustand";

interface MoviesStore {
  movies: MovieResume[];
  setMovies: (movies: MovieResume[]) => void;
}

export const useMoviesStore = create<MoviesStore>((set) => ({
  movies: [],
  setMovies: (movies: MovieResume[]) => set({ movies }),
}));
