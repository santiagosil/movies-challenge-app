"use server";
import type {AddFavoriteRequest} from "@/Schemas/request/AddFavoriteRequest";
import type {GetPagedMovie} from "@/Schemas/response/GetPagedMovie";
import type {NoContentResponse} from "@/Schemas/response/NoContentResponse";

import {GetPagedMovieSchema} from "@/Schemas/response/GetPagedMovie";
import {NoContentResponseSchema} from "@/Schemas/response/NoContentResponse";

export const getFavoritesMovies = async (page?: string): Promise<GetPagedMovie> => {
  let url = `${process.env.MOVIES_API}account/null/favorite/movies`;

  if (!isNaN(Number(page))) url += `?page=${page}`;
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      cache: "no-store",
    });
    const data = GetPagedMovieSchema.parse(await response.json());

    data.results = data.results.map((movie) => {
      movie.isFavorite = true;

      return movie;
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export const addFavoriteMovie = async (
  favoriteRequest: AddFavoriteRequest,
): Promise<NoContentResponse> => {
  try {
    const response = await fetch(`${process.env.MOVIES_API}account/null/favorite`, {
      method: "POST",
      body: JSON.stringify(favoriteRequest),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      cache: "no-cache",
    });
    const data = NoContentResponseSchema.parse(await response.json());

    return data;
  } catch (error) {
    throw error;
  }
};
