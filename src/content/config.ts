// src/content/config.ts
import { defineCollection, z } from "astro:content";

// 1. 定義日記格式
const diaryCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string().optional(),
      image: image().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

// 2. 定義商品格式
const productsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      price: z.number(),
      spec: z.string(),
      image: image(),
      description: z.string(),
      order: z.number().default(99),
      isAvailable: z.boolean().default(true),
    }),
});

// 3. 定義 FAQ 格式 (如果您有建立對應資料夾)
const faqCollection = defineCollection({
  type: "content",
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().optional(),
  }),
});

// 統一導出所有集合 (這行只能出現一次)
export const collections = {
  diary: diaryCollection,
  faq: faqCollection,
  products: productsCollection,
};
