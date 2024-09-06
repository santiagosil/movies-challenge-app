import {GetPagedMovieSchema} from "@/Schemas/response/GetPagedMovie";

export const getRecomendationsMovies = async (movieId: string, page?:string) => {
  let url = `${process.env.MOVIES_API}movie/${movieId}/recommendations`;
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
