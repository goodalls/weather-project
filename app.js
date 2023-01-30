require("dotenv").config();
const express = require("express");
const app = express();
const https = require("https");
const dir = "__dirname";

const key = process.env.KEY;

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=calgary&units=imperial&appid=" +
    key;
  https.get(url, (response) => {
    response.on("data", (data) => {
      const weather = JSON.parse(data);
      const temp = weather.main.temp;
      const icon = weather.weather[0].icon;
      const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      //res.write("<img src="+iconURL+">");
      //res.write("<h1>tempature in Calgary is " + temp + "degrees F</h1>");
      res.send(
        "<h1>tempature in Calgary is " + temp + "degrees F</h1>" +
        "<img src="+iconURL+">"
      );
    });
  });
});

app.listen(3000, () => {
  console.log("server running on port 3000.");
});
