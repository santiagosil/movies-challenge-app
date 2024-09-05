import { films } from "@/mooks/FilmsMooks";
import { CardMovie } from "../shared/CardMovie";

export const MoviesList = () => {
  return (
    <section className="bg-neutral-600 text-white px-6 py-8 space-y-6">
      <h4 className="font-bold text-3xl">Popular</h4>
      <div className="grid grid-cols-5 gap-4">
        {films.results.map((film) => (
          <CardMovie movieResume={film} key={film.id} />
        ))}
      </div>
    </section>
  );
};
