// class name
const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-Details");
const error404 = document.querySelector(".not-found");

// data
const image = document.querySelector(".weather-box img");
const temperature = document.querySelector(".weather-box .temperature");
const description = document.querySelector(".weather-box .description");
const humidity = document.querySelector(".weather-Details .humidity span");
const wind = document.querySelector(".weather-Details .wind span");

// 1.先將 fetch Data 分割出來
const fetchWeather = () => {
  // 重新 fetch 時先讓舊天氣資訊消失
  weatherBox.style.transform = "scale(0)";
  weatherDetails.style.transform = "scale(0)";
  weatherBox.style.opacity = "0";
  weatherDetails.style.opacity = "0";

  const city = document.querySelector(".search-box input").value;
  const APIKey = "My Secret";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  ).then((response) => {
    response.json().then((result) => {
      if (result.cod === "404") {
        // 設定 Error 404 的 style
        container.style.height = "405px";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
      } else {
        // 設定 cod 200 的 style
        container.style.height = "605px";
        weatherBox.classList.add("fadeIn");
        weatherDetails.classList.add("fadeIn");
        weatherBox.style.display = "block";
        error404.style.display = "none";

        // 設定得到數值並 取代/顯示 在 HTNL 上
        temperature.innerHTML = `${parseInt(result.main.temp)}°Ｃ`;
        description.innerHTML = `${result.weather[0].description}`;
        humidity.innerHTML = `${result.main.humidity}%`;
        wind.innerHTML = `${result.wind.speed}km/h`;
        // 根據天氣顯示相應的圖片（ 此情境較適合使用 Switch case（簡單的情境））
        switch (result.weather[0].main) {
          case "Clear":
            image.src = "./images/clear.png";
            break;
          case "Rain":
            image.src = "./images/rain.png";
            break;
          case "Snow":
            image.src = "./images/mist.png";
            break;
          case "Haze":
            image.src = "./images/snow.png";
            break;
          case "Clouds":
            image.src = "./images/cloud.png";
            break;
          // 當 expression 的值都不符合上述條件
          default:
            image.src = "";
            break;
        }
      }

      setTimeout(
        () => {
          // 顯示新天氣資訊
          weatherBox.style.transform = "scale(1)";
          weatherBox.style.opacity = "1";
          weatherDetails.style.transform = "scale(1)";
          weatherDetails.style.opacity = "1";
        },
        // ★ 等待 0.5 秒確定舊內容縮小後再顯示新內容 ★
        500
      );
    });
  });
};

// 2.按下 Enter 後執行 fetch Data
const input = document.querySelector(".search-box input");
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // 防止預設行為
    if (input.value.trim() === "") return; // 如果是空值，就不執行 fetchWeather
    fetchWeather();
  }
});
// 3.點選搜尋後執行 fetch Data
search.addEventListener("click", () => {
  if (input.value.trim() === "") return;
  fetchWeather();
});
