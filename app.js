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

// 按下輸入鍵時時開始

search.addEventListener("click", () => {
  const APIKey = "d4f28db3d2a09114f45439c6fb382b9a";
  const city = document.querySelector(".search-box input").value;

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
        weatherBox.style.display = "block";
        weatherDetails.classList.add("fadeIn");
        error404.style.display = "none";

        // 設定得到數值並 取代/顯示 在 HTNL 上
        temperature.innerHTML = `${parseInt(result.main.temp)}°Ｃ`;
        description.innerHTML = `${result.weather[0].description}`;
        humidity.innerHTML = `${result.main.humidity}%`;
        wind.innerHTML = `${result.wind.speed}km/h`;

        // 根據天氣顯示相應的圖片（此情境較適合使用 Switch case（簡單的情境） ）
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
    });
  });
});

// 按下 Enter 鍵後執行後執行搜尋
const keyDown = () => {
  addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      console.log(e);
    }
  });
};

keyDown();
