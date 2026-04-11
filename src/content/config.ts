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

// 3. 定義 FAQ 格式
const faqCollection = defineCollection({
  type: "content",
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().optional(),
  }),
});

// 4. 定義百科格式（水蜜桃知識庫）
const encyclopediaCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),  // 分類：栽培、品種、風味、保存、病蟲害、產地
    tags: z.array(z.string()).default([]),
    order: z.number().default(99),  // 顯示順序
    relatedArticles: z.array(z.string()).default([]),  // 相關文章 slug 列表
  }),
});

// 統一導出所有集合
export const collections = {
  diary: diaryCollection,
  faq: faqCollection,
  products: productsCollection,
  encyclopedia: encyclopediaCollection,
};
