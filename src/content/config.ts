// src/content/config.ts
import { defineCollection, z } from "astro:content";

const diaryCollection = defineCollection({
  type: "content",
  // 注意這裡新增了 image 參數
  schema: ({ image }) =>
    z.object({
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

// src/content/config.ts
import { defineCollection, z } from "astro:content";

const productsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(), // 品名 (例：優選 8 粒裝禮盒)
      price: z.number(), // 價格 (數字)
      spec: z.string(), // 規格 (例：5台斤 ± 10%)
      image: image(), // 商品主圖
      description: z.string(), // 簡短描述
      order: z.number().default(99), // 顯示順序
      isAvailable: z.boolean().default(true), // 是否有貨
    }),
});

export const collections = {
  diary: diaryCollection,
  faq: faqCollection,
  products: productsCollection, // 確保這行存在
};
