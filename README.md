這個專案使用了 HTML、SCSS、JavaScript 撰寫 ，並使用 OpenWeather API 獲取天氣資訊，實現即時更新 UI。
參考 Demo : https://www.youtube.com/watch?v=iILFBGm_I9M&t=965s

1.使用 fetch 向 OpenWeather API 請求天氣數據，並用 .then(...) 解析JSON 資料。
2.根據回傳的狀態碼判斷請求是否成功，若為 "404" 則顯示「找不到城市」錯誤畫面。
3.使用 Switch-Case 判斷天氣狀況並更換對應的天氣圖片。
4.使用 e.preventDefault() 來防止 Enter觸發表單的行為，確保可以正確被查詢。
5.當天氣更新前，加入 Animation 動畫，當新數據載入後再放大顯示，確保畫面平順切換。

Hope you enjoy :)
![Weather App Intro](https://github.com/user-attachments/assets/9e465da7-61d3-4aa0-8bd6-929ee0e983f3)

https://github.com/user-attachments/assets/89d1153e-da1a-43eb-abcc-b3ce642fc42c


