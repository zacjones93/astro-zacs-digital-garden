import { z, defineCollection } from "astro:content";
// Define a schema for each collection you'd like to validate.
const notesCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date().optional(),
      updatedDate: z.date().optional(), 
      description: z.string().optional(),
      noteIcon: z.string().optional(),
      tags: z.string().optional()
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  notes: notesCollection,
};

