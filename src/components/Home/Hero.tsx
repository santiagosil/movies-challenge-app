import Image from "next/image";

import { kungFuPanda4 } from "@/mooks/KungFuPanda4";

import { Rating } from "../ui/Rating";
import { FavoriteButton } from "../ui/FavoriteButton";

//const kungFuPandaId = 1011985;

export function Hero() {
  return (
    <section className="relative" id="hero">
      <Image
        alt="Hero"
        className="h-[32rem] w-full object-cover object-center"
        height={500}
        src={`https://image.tmdb.org/t/p/original${kungFuPanda4.backdrop_path}`}
        width={1000}
      />
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-transparent" />
      <article className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-end px-16 py-12 text-white">
        <h3 className="text-4xl font-bold">{kungFuPanda4.title}</h3>
        <div className="flex items-center justify-between">
          <p className="max-w-[120ch] text-xl">{kungFuPanda4.overview}</p>
          <div className="flex w-fit items-center gap-8">
            <FavoriteButton className="size-16" />
            <Rating
              className="size-24"
              percent={kungFuPanda4.vote_average * 10}
            />
          </div>
        </div>
      </article>
    </section>
  );
}
