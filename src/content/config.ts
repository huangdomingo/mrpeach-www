import { defineCollection, z } from 'astro:content';

const diaryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),        // 先用字串，之後再轉 Date 也可以
    excerpt: z.string(),
    coverImage: z.string().optional(), // 路徑，例如 /images/diary/xxx.jpg
    tags: z.array(z.string()).default([]),
  }),
});

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().optional(), // 可以控制排序
  }),
});

const productCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    shortDescription: z.string(),
    price: z.number(),
    unit: z.string(),
    isSeasonal: z.boolean().default(true),
    image: z.string().optional(),
  }),
});

export const collections = {
  diary: diaryCollection,
  faq: faqCollection,
  products: productCollection,
};
