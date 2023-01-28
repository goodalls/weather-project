require('dotenv').config()
const express = require("express");
const app = express();
const https = require('https');
const dir = "__dirname"

console.log(process.env.KEY , 'howdy');

app.get("/", (req, res)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&units=imperial&appid=637f666eac96f9e465bf00054a71578e"
    https.get(url, (response)=>{
        response.on("data", (data)=>{
            let weather = JSON.parse(data)
        })
    })
    res.send('working bro')
})

app.listen(3000, ()=>{console.log('server running on port 3000.');})