# SEO 優化工作記錄 — 2026-05-14

**執行者：** Claude (Cowork)
**審閱者：** Domingo
**關鍵字目標：** 拉拉山水蜜桃、拉拉山採水蜜桃
**資料來源：** Google Search Console 近 3 個月報表（2026-04-20 ～ 2026-05-12）

---

## 一、背景與 GSC 現況

| 指標 | 數值 |
|------|------|
| 觀察期總點擊 | 271 次 |
| 觀察期總曝光 | 2,917 次 |
| 平均 CTR | 9.3% |
| 平均排名 | 6.4 |

### 目標關鍵字現況

| 關鍵字 | 點擊 | 曝光 | CTR | 排名 |
|--------|------|------|-----|------|
| 拉拉山水蜜桃 | 57 | 318 | 17.92% | 9.12 |
| 拉拉山採水蜜桃 | 3 | 18 | 16.67% | 10.22 |

兩個關鍵字均在第一頁邊緣，本次優化目標為推進至第 5–7 名。

### 問題頁面一覽

| 頁面 | 曝光 | CTR | 排名 | 問題 |
|------|------|-----|------|------|
| `/encyclopedia/bagging/` | 33 | 0% | 6.7 | meta 無「拉拉山」、雙 H1、CTR 為零 |
| `/about-orchard/` | 167 | 2.4% | 8.5 | 無 description prop、年份過期 |
| `/` (首頁) | 1,549 | 8.2% | 7.72 | title 含「2025」過期年份 |
| `/pick-your-own/` | 未曝光 | — | — | title/description 無目標關鍵字 |

---

## 二、修改清單

### 1. `src/content/encyclopedia/bagging.md`

**問題：** title 不含「拉拉山水蜜桃」；description 偏技術性；markdown 內文第一行有額外 H1，與 `[slug].astro` 渲染的 H1 重複。

**修改：**

```
# title（改前）
水蜜桃套袋：防蟲防鳥防風雨，阿義老闆的實戰經驗

# title（改後）
拉拉山水蜜桃套袋全記錄｜套袋時機、手感判斷與阿義老闆30年心得
```

```
# description（改前）
水蜜桃套袋是疏果之後、採收之前最關鍵的保護工序……本文記錄……三十餘年的套袋實戰經驗。

# description（改後）
拉拉山水蜜桃套袋何時做、怎麼做？阿義老闆三十年實戰：挑陰天微風、逐顆手工套袋，套袋後用四招手感判斷熟度。近二十甲桃園的完整流程，一次看懂。
```

- `tags` 新增 `套袋時機`
- 移除 markdown 內文第一行的 `# 🍑 水蜜桃套袋：…`（消除雙 H1）

---

### 2. `src/pages/about-orchard.astro`

**問題：** 無 `description` prop（使用全站通用版，與頁面內容不符）；title 含「2025」過期年份。

**修改：**

```
# pageTitle（改前）
關於水蜜桃達人農場｜榮獲2025拉拉山水蜜桃王殊榮

# pageTitle（改後）
關於水蜜桃達人農場｜拉拉山30年老農，榮獲水蜜桃王殊榮
```

新增 `pageDescription`，並傳入 `<BaseLayout description={pageDescription}>`：

```
阿義老闆在拉拉山上巴陵種了三十年水蜜桃，榮獲水蜜桃王及甜度王雙料冠軍。
海拔1400–1600公尺，日夜溫差大，產出香甜可口的拉拉山水蜜桃。2026採果體驗預約中。
```

---

### 3. `src/content/news/2026-05-01-open-pick.md`

**問題：** description 含簡體字 `额`（應為繁體 `額`）；未含「採水蜜桃」關鍵字。

**修改：**

```
# description（改前）
拉拉山水蜜桃產季正式開始！開放團體、散客預約採果，LINE 一鍵報名，入園費 100 元可全额折抵。

# description（改後）
2026 拉拉山採水蜜桃開跑！開放團體、散客預約入園，親手摘下香甜水蜜桃。
LINE 一鍵報名，入園費 100 元可全額折抵消費。
```

---

### 4. `src/pages/index.astro`

**問題：** `pageTitle` 含「2025」；JSON-LD LocalBusiness 的 `award`、`description`、`validFrom/validThrough` 均為 2025 年資料；未傳 `description` prop。

**修改：**

```
# pageTitle（改前）
水蜜桃達人農場｜榮獲2025拉拉山水蜜桃王・高海拔產地直送

# pageTitle（改後）
拉拉山水蜜桃達人農場｜水蜜桃王・採果體驗・產地直送
```

新增 `pageDescription`：

```
拉拉山水蜜桃達人農場，位於上巴陵海拔1400–1600公尺。阿義老闆三十年種植，榮獲水蜜桃王殊榮。
2026產季開跑，採水蜜桃體驗預約中，歡迎宅配訂購。
```

JSON-LD 更新：
- `award`: `"2025 拉拉山水蜜桃王"` → `"拉拉山水蜜桃王"`
- `validFrom`: `2025-05-01` → `2026-05-01`
- `validThrough`: `2025-08-31` → `2026-08-31`

---

### 5. `src/layouts/BaseLayout.astro`

**問題 A：** 全站預設 title/description 含「2025」。

**修改：**

```
# 預設 title（改前）
拉拉山水蜜桃達人｜榮獲2025水蜜桃王

# 預設 title（改後）
拉拉山水蜜桃達人農場｜水蜜桃王・採果體驗・產地直送
```

```
# 預設 description（改前）
水蜜桃達人農場位於拉拉山上巴陵，傳承30年種植技術，榮獲2025年水蜜桃王。提供產地直送宅配與採果體驗。

# 預設 description（改後）
拉拉山水蜜桃達人農場，位於上巴陵海拔1400–1600公尺。阿義老闆三十年種植，榮獲水蜜桃王殊榮。
2026產季開跑，採水蜜桃體驗預約中，歡迎宅配訂購。
```

**問題 B（Bonus bug）：** footer 的 FAQ 與百科連結誤套了行動版選單 class（`block px-3 py-3 text-base...`）。

**修改：** 恢復為正常 footer 連結 class（`hover:text-white transition`）。

---

### 6. `src/pages/pick-your-own.astro`

**問題：** title 不含「採水蜜桃」；無 `description` prop；H1 為純視覺文案，不含目標關鍵字。

**修改：**

```
# pageTitle（改前）
預約採果｜拉拉山水蜜桃達人農場

# pageTitle（改後）
拉拉山採水蜜桃體驗・預約｜水蜜桃達人農場
```

新增 `pageDescription`：

```
2026 拉拉山採水蜜桃開放預約！親手走入果園摘水蜜桃，入園費 100 元全額折抵，
一斤 300 元現採現秤。位於桃園復興區上巴陵，電話或 LINE 預約阿義老闆。
```

H1 由「親手摘下拉拉山的鮮甜」改為「拉拉山採水蜜桃・親手摘下鮮甜」。

---

### 7. `src/pages/encyclopedia/[slug].astro`

**問題：** 百科文章頁沒有 JSON-LD，Google 無法識別為結構化知識文章。

**新增：** `Article` schema + `BreadcrumbList` schema，注入至 `<head>`。

BreadcrumbList 結構：首頁 › 水蜜桃百科 › 文章標題

---

## 三、已確認無需修改

| 頁面 | 原因 |
|------|------|
| `src/pages/faq.astro` | 已有 FAQPage JSON-LD、title/description 正確 |
| `src/pages/diary/[slug].astro` | 已有 BlogPosting JSON-LD |
| 其他百科 .md 文章 | 無雙 H1 問題 |

---

## 四、後續追蹤

- **預計觀察時間：** 2026-05-28（兩週後）
- **追蹤指標：**
  - 「拉拉山水蜜桃」排名是否從 9.1 進入前 7
  - 「拉拉山採水蜜桃」排名是否從 10.2 進入前 8
  - `/encyclopedia/bagging/` CTR 是否從 0% 提升
  - `/about-orchard/` CTR 是否從 2.4% 提升
  - `/pick-your-own/` 是否開始出現在 GSC 曝光

- **下一步可考慮：**
  - 針對「拉拉山水蜜桃產季」（50 次曝光、0 點擊、排名 11.5）新增或優化對應頁面
  - 日記 index 頁（76 次曝光、2.63% CTR）補強 title/description

---

*本文件由 Claude 自動生成，Domingo 審閱後 commit。*
