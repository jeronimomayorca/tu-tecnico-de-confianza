import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const servicesCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/services" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      price: z.number(),
      duration: z.string(),
      imgUrl: image(),
    }),
});

export const collections = {
  services: servicesCollection,
};
