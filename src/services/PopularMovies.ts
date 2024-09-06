"use server";
import type {GetPagedMovie} from "@/Schemas/response/GetPagedMovie";

import {GetPagedMovieSchema} from "@/Schemas/response/GetPagedMovie";

export const getPopularMovies = async (page?: string): Promise<GetPagedMovie> => {
  let url = `${process.env.MOVIES_API}movie/popular`;

  if (!isNaN(Number(page))) url += `?page=${page}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    const data = GetPagedMovieSchema.parse(await response.json());

    return data;
  } catch (error) {
    throw error;
  }
};
