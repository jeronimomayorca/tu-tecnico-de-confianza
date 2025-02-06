import { z, defineCollection } from "astro:content";

const servicesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      price: z.number(),
      duration: z.string(),
      imgUrl: image(),
      slug: z.string().optional(),
    }),
});

export const collections = {
  services: servicesCollection,
};
