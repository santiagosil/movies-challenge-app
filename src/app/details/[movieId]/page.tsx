import {notFound} from "next/navigation";

import {getDetailMovie} from "@/services/DetailMovie";
import {HeroDetails} from "@/components/details/HeroDetails";
import RootLayout from "@/app/layout";
import {Header} from "@/components/shared/Header";
import {getRecomendationsMovies} from "@/services/RecomendationsMovies";
import {MoviesList} from "@/components/Home/MoviesList";

interface DetailsMoviePageProps {
  params: {movieId: string};
  searchParams: {page?: string};
}

export default async function DetailsMoviePage({params, searchParams}: DetailsMoviePageProps) {
  if (!params.movieId) notFound();
  const movie = await getDetailMovie(params.movieId);
  const recomendations = await getRecomendationsMovies(params.movieId, searchParams.page);

  return (
    <RootLayout>
      <Header />
      <HeroDetails movie={movie} />
      <main className="flex min-h-96">
        <MoviesList list={recomendations} title="Recommendations" />
      </main>
    </RootLayout>
  );
}
