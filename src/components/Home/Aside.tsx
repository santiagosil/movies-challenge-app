"use client";
import type {FilterMovies} from "@/Schemas/form/FilterMovies";
import type {Genre} from "@/Schemas/response/Genre";
import type {SubmitHandler} from "react-hook-form";

import {useForm} from "react-hook-form";
import {Search} from "lucide-react";
import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";

import {SubmitButton} from "../form/SubmitButton";
interface AsideProps {
  genres: Genre[];
}

export function Aside({genres}: AsideProps) {
  const {register, handleSubmit} = useForm<FilterMovies>({
    defaultValues: {
      search: "",
      genre: "",
    },
  });

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const onSubmit: SubmitHandler<FilterMovies> = (data) => {

    const params = new URLSearchParams(searchParams);

    params.set("keywords", data.search ?? "");

    params.set("genre", data.genre ?? "");
    params.set("page", "1");
    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <aside className="w-fit bg-neutral-800 px-4 py-8">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
        <label className="w-64 space-y-4 text-white">
          <span className="text-xl font-bold">Search</span>
          <div className="relative">
            <input
              className="border-b border-b-neutral-500/60 bg-neutral-850 px-4 py-3 text-white outline-none placeholder:text-white/60 focus:border-b-white"
              placeholder="Keywords"
              {...register("search")}
            />
            <Search className="absolute right-3 top-1/2 size-5 -translate-y-1/2 text-white" />
          </div>
        </label>
        <label className="space-y-4 text-white">
          <span className="text-xl font-bold">Genres</span>
          <select className="block w-full bg-neutral-850 px-4 py-3 " {...register("genre")}>
            <option value="">Choose a Genre</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </label>
        <SubmitButton>Search</SubmitButton>
      </form>
    </aside>
  );
}
