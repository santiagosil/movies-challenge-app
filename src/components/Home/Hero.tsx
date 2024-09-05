import Image from "next/image";
import { films } from "@/mooks/FilmsMooks";
import { kungFuPanda4 } from "@/mooks/KungFuPanda4";
import { Heart } from "lucide-react";
import { Rating } from "../ui/Rating";
import { FavoriteButton } from "../ui/FavoriteButton";

const kungFuPandaId = 1011985;

export const Hero = () => {
  return (
    <section id="hero" className="relative">
      <Image
        width={1000}
        height={500}
        src={`https://image.tmdb.org/t/p/original${kungFuPanda4.backdrop_path}`}
        alt="Hero"
        className="w-full h-[32rem] object-cover object-center"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" />
      <article className="text-white absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center px-16 py-12">
        <h3 className="text-4xl font-bold">{kungFuPanda4.title}</h3>
        <div className="flex items-center justify-between">
          <p className="max-w-[120ch] text-xl">{kungFuPanda4.overview}</p>
          <div className="flex items-center w-fit gap-8">
            <FavoriteButton className="size-16" />
            <Rating
              percent={kungFuPanda4.vote_average * 10}
              className="size-24"
            />
          </div>
        </div>
      </article>
    </section>
  );
};
