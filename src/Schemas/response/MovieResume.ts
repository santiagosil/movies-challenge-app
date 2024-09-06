import {z} from "zod";

export const MovieResumeSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
  isFavorite: z.boolean().optional().default(false),
});

export type MovieResume = z.infer<typeof MovieResumeSchema>;
