import type {Metadata} from "next";

import {Header} from "@/components/shared/Header";
import {Hero} from "@/components/Home/Hero";
import {MoviesList} from "@/components/Home/MoviesList";
import {getFavoritesMovies} from "@/services/FavoriteMovies";

import RootLayout from "../layout";

export const metadata: Metadata = {
  title: "Favorites - QuickBet Movies",
  description:
    "The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.",
  keywords:
    "Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast",
};

interface HomePageProps {
  searchParams: {page?: string};
}

async function FavoritesPage({searchParams}: HomePageProps) {
  const favoritesMovies = await getFavoritesMovies(searchParams.page);

  return (
    <RootLayout>
      <Header />
      <Hero />
      <main className="flex min-h-96">
        <MoviesList list={favoritesMovies} title="Favorites" />
      </main>
    </RootLayout>
  );
}

export default FavoritesPage;
