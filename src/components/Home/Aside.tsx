"use client";
import type { FilterMovies } from "@/Schemas/request/FilterMovies";

import { useForm } from "react-hook-form";

import { InputSearchFormField } from "../form/InputSearchFormField";
import { SelectGenreFormField } from "../form/SelectGenreFormField";

export function Aside() {
  const form = useForm<FilterMovies>({
    defaultValues: {
      search: "",
      genre: "",
    },
  });

  const onSubmit = (data: FilterMovies) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <aside className="w-fit bg-neutral-800 px-4 py-8">
      <form
        className="flex flex-col gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <InputSearchFormField />
        <SelectGenreFormField />
      </form>
    </aside>
  );
}
