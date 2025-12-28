// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const diaryCollection = defineCollection({
  type: 'content',
  // 注意這裡新增了 image 參數
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().optional(),
    // [修正] 使用 image() 來定義圖片欄位
    image: image().optional(), 
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  diary: diaryCollection,
};