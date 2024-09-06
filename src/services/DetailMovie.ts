import type {MovieDetail} from "@/Schemas/response/MovieDetail";

import {MovieDetailSchema} from "@/Schemas/response/MovieDetail";

export const getDetailMovie = async (movieId: string): Promise<MovieDetail> => {
  if (!movieId) throw new Error("Movie ID is required");
  const url = `${process.env.MOVIES_API}/movie/${movieId}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    const data = MovieDetailSchema.parse(await response.json());

    return data;
  } catch (error) {
    throw error;
  }
};
