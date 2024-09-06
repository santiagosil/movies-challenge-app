import {z} from "zod";

export const FilterMoviesSchema = z.object({
  search: z.string().optional(),
  genre: z.string().optional(),
});

export type FilterMovies = z.infer<typeof FilterMoviesSchema>;
