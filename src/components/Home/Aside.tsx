"use client";
import { FilterMovies } from "@/Schemas/request/FilterMovies";
import { useForm } from "react-hook-form";
import { InputSearchFormField } from "../form/InputSearchFormField";
import { SelectGenreFormField } from "../form/SelectGenreFormField";

export const Aside = () => {
  const form = useForm<FilterMovies>({
    defaultValues: {
      search: "",
      genre: "",
    },
  });

  const onSubmit = (data: FilterMovies) => {
    console.log(data);
  };

  return (
    <aside className="bg-neutral-800 px-4 py-8 w-fit">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <InputSearchFormField />
        <SelectGenreFormField />
      </form>
    </aside>
  );
};
