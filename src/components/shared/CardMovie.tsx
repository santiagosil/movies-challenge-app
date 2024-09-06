"use client";
import type {MovieResume} from "@/Schemas/response/MovieResume";

import Image from "next/image";
import Link from "next/link";
import {format} from "date-fns";

import {Rating} from "../ui/Rating";
import {FavoriteButton} from "../ui/FavoriteButton";

interface CardMovieProps {
  movieResume: MovieResume;
}

export function CardMovie({movieResume}: CardMovieProps) {
  return (
    <div className="flex h-full flex-col">
      <Link href={`/details/${movieResume.id}`}>
        <Image
          alt={movieResume.title}
          className="object-cover object-center"
          height={300}
          src={`https://image.tmdb.org/t/p/original${movieResume.poster_path}`}
          width={200}
        />
      </Link>
      <article className="flex h-full flex-col justify-between bg-neutral-850 p-3 text-white/80">
        <h5 className="text-lg font-bold text-white">{movieResume.title}</h5>
        <p>{format(movieResume.release_date, "PP")}</p>
        <div className="flex items-center justify-between">
          <label className="flex flex-col items-center text-center">
            <span>Rating</span>
            <Rating className="size-12" percent={movieResume.vote_average * 10} />
          </label>
          <div className="flex flex-col items-center justify-center text-center">
            <span>Favorites</span>
            <FavoriteButton movie={movieResume} />
          </div>
        </div>
      </article>
    </div>
  );
}
