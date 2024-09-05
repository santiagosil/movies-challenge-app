import { films } from "@/mooks/FilmsMooks";

import { CardMovie } from "../shared/CardMovie";

export function MoviesList() {
  return (
    <section className="space-y-6 bg-neutral-600 px-6 py-8 text-white">
      <h4 className="text-3xl font-bold">Popular</h4>
      <div className="grid grid-cols-5 gap-4">
        {films.results.map((film) => (
          <CardMovie key={film.id} movieResume={film} />
        ))}
      </div>
    </section>
  );
}
