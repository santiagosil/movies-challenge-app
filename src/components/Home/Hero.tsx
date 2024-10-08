import Image from "next/image";

import {getDetailMovie} from "@/services/DetailMovie";
import {MovieResumeSchema} from "@/Schemas/response/MovieResume";

import {Rating} from "../ui/Rating";
import {FavoriteButton} from "../ui/FavoriteButton";

const kungFuPandaId = 1011985;

export async function Hero() {
  const heroFilm = await getDetailMovie(String(kungFuPandaId));

  return (
    <section className="relative" id="hero">
      <Image
        alt="Hero"
        className="h-[32rem] w-full object-cover object-center"
        height={500}
        src={`https://image.tmdb.org/t/p/original${heroFilm.backdrop_path}`}
        width={1000}
      />
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-transparent" />
      <article className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-end px-16 py-12 text-white">
        <h3 className="text-4xl font-bold">{heroFilm.title}</h3>
        <div className="flex items-center justify-between">
          <p className="max-w-[120ch] text-xl">{heroFilm.overview}</p>
          <div className="flex w-fit items-center gap-8">
            <FavoriteButton className="size-16" movie={MovieResumeSchema.parse(heroFilm)} />
            <Rating className="size-24" percent={heroFilm.vote_average * 10} />
          </div>
        </div>
      </article>
    </section>
  );
}
