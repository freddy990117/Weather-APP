## 🌦️ Weather App
這是一款使用 HTML、SCSS 和 JavaScript 開發的即時天氣查詢應用程式，透過 OpenWeather API 取得天氣資訊，並根據不同天氣狀況動態更新 UI。

## 📸 Demo
https://github.com/user-attachments/assets/89d1153e-da1a-43eb-abcc-b3ce642fc42c

## 🚀 Features
- 使用 `fetch` 向 OpenWeather API 請求天氣數據，並解析 JSON 資料。
- 根據回傳的狀態碼判斷請求是否成功，若為 "404" 則顯示「找不到城市」錯誤畫面。
- 使用 `switch-case` 判斷天氣狀況並更換對應的天氣圖片。
- 使用 `e.preventDefault()` 來防止 Enter 觸發表單的預設行為。
- 天氣更新前加入動畫效果，數據載入後顯示動畫過渡。

## 🛠️ Skill

- HTML5 + SCSS + JavaScript
- Fetch OpenWeather API
- CSS Transition

## 🚩How To Start 

1. 下載或複製此專案：
   
```bash
git clone https://github.com/freddy990117/Weather-APP.git
```
2.	取得 OpenWeather API 金鑰：
前往 OpenWeather 官方網站 註冊並取得 API 金鑰。
---
3.	設定 API 金鑰：
在 app.js 中，將 YOUR_API_KEY 替換為你的實際 API 金鑰。
---
4.	啟動應用程式：
使用瀏覽器開啟 index.html，即可開始使用天氣查詢功能。

---
## 🔐 LICENSE 

本專案採用 MIT 授權條款

---
## 🙏 特別感謝

本專案靈感與技術實作參考了 [ASMR Programming](https://www.youtube.com/watch?v=iILFBGm_I9M&t=967s)，感謝他詳細的講解與範例，讓我順利完成這個天氣查詢應用程式。
