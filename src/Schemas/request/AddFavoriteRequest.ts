import {z} from "zod";

export const AddFavoriteRequestSchema = z.object({
  media_type: z.string(),
  media_id: z.number(),
  favorite: z.boolean(),
});

export type AddFavoriteRequest = z.infer<typeof AddFavoriteRequestSchema>;
