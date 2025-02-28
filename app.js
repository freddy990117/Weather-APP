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

// 追蹤輸入的數值並在按下時開始
search.addEventListener("click", () => {
  const city = document.querySelector(".search-box input").value;
  console.log(city);
  const APIKey = "d4f28db3d2a09114f45439c6fb382b9a";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    // fetch 出一個 Proimes
    .then((response) => response.json())
    // 取出資料
    .then((result) => {
      // 如果出現錯誤
      if (result.cod === "404") {
        // 高度變成 500 並加入顯示動畫
        container.style.height = "500px";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
      }
      // 沒有出現以上錯誤就執行：
      //   選擇使用 switch 原因是因為狀況較簡單，不用使用到 if else
      switch (result.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";
          break;

        case "Rain":
          image.src = "images/rain.png";
          break;

        case "Snow":
          image.src = "images/snow.png";
          break;

        case "Clouds":
          image.src = "images/cloud.png";
          break;

        case "Haze":
          image.src = "images/mist.png";
          break;

        default:
          image.src = "";
      }

      temperature.innerHTML = `${parseInt(result.main.temp)}<span>°C</span>`;
      description.innerHTML = `${result.weather[0].description}`;
      humidity.innerHTML = `${result.main.humidity}%`;
      wind.innerHTML = `${parseInt(result.wind.speed)}Km/h`;

      console.log(result);
    });
});

// name
// main.humidity
// wind.speed
// main.temp
