import { z } from "zod";

export const searchSchema = z.object({
  search: z.string().min(2).max(50),
});

export const subSchema = z.object({
  text: z.string().email(),
});
