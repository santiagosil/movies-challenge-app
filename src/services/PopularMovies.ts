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

interface MoviesByFilter {
  keywords?: string;
  genre?: string;
  page?: string;
}

export const getMoviesByFilter = async (params: MoviesByFilter): Promise<GetPagedMovie> => {
  let url = `${process.env.MOVIES_API}discover/movie`;
  const searchParams = new URLSearchParams();

  if (params.keywords) searchParams.set("with_keywords", params.keywords);
  if (params.genre) searchParams.set("with_genres", params.genre);
  if (!isNaN(Number(params.page))) searchParams.set("page", params.page ?? "");

  url += `?${searchParams.toString()}`;

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
