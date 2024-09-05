import { MovieResume } from "@/Schemas/request/MovieResume";
import Image from "next/image";
import { Rating } from "../ui/Rating";
import { FavoriteButton } from "../ui/FavoriteButton";

interface CardMovieProps {
  movieResume: MovieResume;
}
export const CardMovie = ({ movieResume }: CardMovieProps) => {
  return (
    <div className="h-full flex flex-col">
      <Image
        src={`https://image.tmdb.org/t/p/original${movieResume.poster_path}`}
        alt={movieResume.title}
        className="object-cover object-center"
        width={200}
        height={300}
      />
      <article className="bg-neutral-850 text-white/80 p-3 h-full flex flex-col justify-between">
        <h5 className="text-lg font-bold text-white">{movieResume.title}</h5>
        <p>{movieResume.release_date}</p>
        <div className="flex items-center justify-between [&_label]:flex [&_label]:items-center [&_label]:flex-col [&_label]:text-center">
          <label>
            <span>Rating</span>
            <Rating
              percent={movieResume.vote_average * 10}
              className="size-12"
            />
          </label>
          <label>
            <span>Favorites</span>
            <FavoriteButton />
          </label>
        </div>
      </article>
    </div>
  );
};
