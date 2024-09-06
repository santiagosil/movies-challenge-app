"use client";
import type {GetPagedMovie} from "@/Schemas/response/GetPagedMovie";

import {useEffect} from "react";

import {useMoviesStore} from "@/store/movies-store";

import {CardMovie} from "../shared/CardMovie";
import Pagination from "../ui/Pagination";

interface MoviesListProps {
  title: string;
  list: GetPagedMovie;
}

export function MoviesList({title, list}: MoviesListProps) {
  const {setFavoritesMovies, setMovies} = useMoviesStore();

  useEffect(() => {
    if (title === "Favorites") setFavoritesMovies(list.results);
    else setMovies(list.results);
  }, [list.results, title, setFavoritesMovies, setMovies]);

  return (
    <section className="space-y-6 bg-neutral-600 px-6 py-8 text-white">
      <h4 className="text-3xl font-bold">{title}</h4>
      <div className="grid grid-cols-5 gap-4">
        {list.results.map((film) => (
          <CardMovie key={film.id} movieResume={film} />
        ))}
        <Pagination page={list.page} totalPages={list.total_pages} />
      </div>
    </section>
  );
}
