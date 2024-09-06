import type {Metadata} from "next";

import {Header} from "@/components/shared/Header";
import {Hero} from "@/components/Home/Hero";
import {Aside} from "@/components/Home/Aside";
import {MoviesList} from "@/components/Home/MoviesList";
import {getPopularMovies} from "@/services/PopularMovies";

import RootLayout from "./layout";

export const metadata: Metadata = {
  title: "QuickBet Movies",
  description:
    "The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.",
  keywords:
    "Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast",
};

interface HomePageProps {
  searchParams: {page?: string};
}

export default async function HomePage({searchParams}: HomePageProps) {
  const popularMovies = await getPopularMovies(searchParams.page);

  return (
    <RootLayout>
      <Header />
      <Hero />
      <main className="flex min-h-96">
        <Aside />
        <MoviesList list={popularMovies} title="Popular" />
      </main>
    </RootLayout>
  );
}
