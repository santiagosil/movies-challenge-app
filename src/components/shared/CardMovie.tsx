import type { MovieResume } from "@/Schemas/request/MovieResume";

import Image from "next/image";

import { Rating } from "../ui/Rating";
import { FavoriteButton } from "../ui/FavoriteButton";

interface CardMovieProps {
  movieResume: MovieResume;
}

export function CardMovie({ movieResume }: CardMovieProps) {
  return (
    <div className="flex h-full flex-col">
      <Image
        alt={movieResume.title}
        className="object-cover object-center"
        height={300}
        src={`https://image.tmdb.org/t/p/original${movieResume.poster_path}`}
        width={200}
      />
      <article className="flex h-full flex-col justify-between bg-neutral-850 p-3 text-white/80">
        <h5 className="text-lg font-bold text-white">{movieResume.title}</h5>
        <p>{movieResume.release_date}</p>
        <div className="flex items-center justify-between [&_label]:flex [&_label]:flex-col [&_label]:items-center [&_label]:text-center">
          <label>
            <span>Rating</span>
            <Rating
              className="size-12"
              percent={movieResume.vote_average * 10}
            />
          </label>
          <label htmlFor="#">
            <span>Favorites</span>
            <FavoriteButton />
          </label>
        </div>
      </article>
    </div>
  );
}
