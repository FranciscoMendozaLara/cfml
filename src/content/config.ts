import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    tag:         z.string(),
    order:       z.number().optional(),
    image:       z.string().optional(),
    github:      z.string().optional(),
    demo:        z.string().optional(),
    date:        z.string().optional(),
  }),
});

export const collections = { projects };
