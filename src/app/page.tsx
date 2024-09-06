import type {Metadata} from "next";
import type {GetPagedMovie} from "@/Schemas/response/GetPagedMovie";

import {Header} from "@/components/shared/Header";
import {Hero} from "@/components/Home/Hero";
import {Aside} from "@/components/Home/Aside";
import {MoviesList} from "@/components/Home/MoviesList";
import {getMoviesByFilter, getPopularMovies} from "@/services/PopularMovies";
import {getGenres} from "@/services/Genres";

import RootLayout from "./layout";

export const metadata: Metadata = {
  title: "QuickBet Movies",
  description:
    "The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.",
  keywords:
    "Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast",
};

interface HomePageProps {
  searchParams: {page?: string; keywords?: string; genre?: string};
}

export default async function HomePage({searchParams}: HomePageProps) {
  let popularMovies: GetPagedMovie | undefined = undefined;

  if (searchParams.keywords || searchParams.genre) {
    popularMovies = await getMoviesByFilter(searchParams);
  } else {
    popularMovies = await getPopularMovies(searchParams.page);
  }
  const genres = await getGenres();

  return (
    <RootLayout>
      <Header />
      <Hero />
      <main className="flex min-h-96">
        <Aside genres={genres} />
        <MoviesList list={popularMovies} title="Popular" />
      </main>
    </RootLayout>
  );
}
