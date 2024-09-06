import type {Genre} from "@/Schemas/response/Genre";

import {z} from "zod";

import {GenreSchema} from "@/Schemas/response/Genre";

export const getGenres = async (page?: string): Promise<Genre[]> => {
  let url = `${process.env.MOVIES_API}/genre/movie/list`;

  if (!isNaN(Number(page))) url += `?page=${page}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });

    const data = z.object({genres: z.array(GenreSchema)}).parse(await response.json());

    return data.genres;
  } catch (error) {
    throw error;
  }
};
