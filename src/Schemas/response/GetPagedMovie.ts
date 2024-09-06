import {z} from "zod";

import {MovieResumeSchema} from "./MovieResume";

export const GetPagedMovieSchema = z.object({
  page: z.number(),
  results: z.array(MovieResumeSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type GetPagedMovie = z.infer<typeof GetPagedMovieSchema>;
