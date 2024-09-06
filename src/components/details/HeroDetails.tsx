import type {MovieResume} from "@/Schemas/response/MovieResume";
import type {MovieDetail} from "@/Schemas/response/MovieDetail";

import Image from "next/image";

import {MovieResumeSchema} from "@/Schemas/response/MovieResume";

import {FavoriteButton} from "../ui/FavoriteButton";
import {Rating} from "../ui/Rating";

interface HeroDetailsProps {
  movie: MovieDetail;
}

export function HeroDetails({movie}: HeroDetailsProps) {
  return (
    <section className="relative" id="hero">
      <Image
        alt="Hero"
        className="h-[32rem] w-full object-cover object-center"
        height={500}
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        width={1000}
      />
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-transparent" />
      <article className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-end px-16 py-12 text-white">
        <h3 className="text-4xl font-bold">{movie.title}</h3>
        <div className="flex items-center justify-between">
          <p className="max-w-[120ch] text-xl">{movie.overview}</p>
          <div className="flex w-fit items-center gap-8">
            <FavoriteButton className="size-16" movie={MovieResumeSchema.parse(movie)} />
            <Rating className="size-24" percent={movie.vote_average * 10} />
          </div>
        </div>
      </article>
    </section>
  );
}
