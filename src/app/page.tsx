import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/Home/Hero";
import { Aside } from "@/components/Home/Aside";
import { MoviesList } from "@/components/Home/MoviesList";

import RootLayout from "./layout";

export default function Home(): JSX.Element {
  return (
    <RootLayout>
      <Header />
      <Hero />
      <main className="flex min-h-96">
        <Aside />
        <MoviesList />
      </main>
    </RootLayout>
  );
}
