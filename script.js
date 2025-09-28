/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!". 




💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/
    var element = document.getElementById("t1-msg");
    element.innerHTML= "Hello, World!";

/*  
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:
button.addEventListener("click", function () {
    // change text here
});
*/
 var button = document.getElementById("t2-btn");
 var text = document.getElementById("t2-status");
 button.addEventListener("click", function() {
    text.innerHTML = "You Clicked The Button!";
 });

/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/
 var button3 = document.getElementById("t3-loadQuote");
 var author ;
 var quote ;
 var quoteText = document.getElementById("t3-quote");
 var authorText = document.getElementById("t3-author");
 
 async function loadQuote(){
        try{
            const res = await fetch("https://dummyjson.com/quotes/random");

            if (!res.ok) throw new Error("HTTP" + res.status);
            const data = await res.json();
            return data;    
        }
        catch (err){
             
                console.log("Error");
        }
        


 }


 button3.addEventListener("click", async function(){
    const data = await loadQuote();
    
    quoteText.innerHTML = data.quote;
    authorText.innerHTML =data.author;
 })

/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/

 var button4 = document.getElementById("t4-loadWx");
 

 var temp = document.getElementById("t4-temp");
 var humi = document.getElementById("t4-hum");
 var wind = document.getElementById("t4-wind");
const base  = "https://api.openweathermap.org/data/2.5/weather";
const city  = "Dammam";
const units = "metric";
const key   = "05a0b632e4813e4102366f4e7edbce99";

const url = `${base}?q=${encodeURIComponent(city)}&appid=${key}&units=${units}`;
console.log(url);
 async function loadWeather(){
        try{
            const res = await fetch(url);

            if (!res.ok) throw new Error("HTTP" + res.status);
            const data = await res.json();
            
            return data;    
        }
        catch (err){
             
                console.log("Error");
        }
        


 }


 button4.addEventListener("click", async function(){
    const data = await loadWeather();
    
    temp.innerHTML = data.main.temp + "°C";
    humi.innerHTML =data.main.humidity + "%";
    wind.innerHTML =data.wind.speed+ "m/s";
 })
