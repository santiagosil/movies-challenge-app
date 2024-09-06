import {z} from "zod";

export const NoContentResponseSchema = z.object({
  status_code: z.number(),
  status_message: z.string(),
});

export type NoContentResponse = z.infer<typeof NoContentResponseSchema>;
