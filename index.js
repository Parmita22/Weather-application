
let cityName = document.querySelector(".weather_city")
let dateTime  = document.querySelector(".weather_date_time")
let w_forecaste = document.querySelector(".weather_forecast")
let w_temperature = document.querySelector(".weather_temperature")
let w_icon = document.querySelector(".weather_icon")
let w_min = document.querySelector(".weather_min")
let w_max = document.querySelector(".weather_max")
let f_l =document.querySelector(".weather_feelsLike")
let hum = document.querySelector(".weather_humidity")
let w_i = document.querySelector(".weather_wind")
let pre = document.querySelector(".weather_pressure")

let searchhh = document.querySelector(".weather_search")
let city = "Solapur";

searchhh.addEventListener("submit", (event) => {
       event.preventDefault();
               
       let enter = document.querySelector(".city_name");
       console.log(enter.value);
       city = enter.value;
       getWeatherData();
       
       // Clear the input field
       enter.value = "";
   });
const getCountryName = (code) =>{
    return new Intl.DisplayNames([code], { type: 'region' }).of(code);
}
const getDateTime = (dt) =>{
    
// let dt = 1708667988;
const curDate = new Date(dt * 1000); // Convert seconds to milliseconds
console.log(curDate);
// // const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  //   second: "numeric",
};

const formatter = new Intl.DateTimeFormat("en-US", options);
// // console.log(formatter);
const formattedDate = formatter.format(curDate);
// console.log(formattedDate);

return formattedDate;

// let num = 3232.552;
// console.log(num.toFixed());
// console.log(Math.round(num));

}
const getWeatherData = async () => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=272f2ac2f8a4cb77d76c2adacf899678`;
    try{
      const res = await fetch(weatherUrl,{
        headers : {
            Accept : "application/json"
        }
      })
      const data = await res.json();
      console.log(data)
    const { main ,name ,temp_max,temp_min, weather ,wind ,sys,dt} = data;
    w_forecaste.innerHTML = weather[0].main;
    // w_icon.innerHTML = `<img src="https://api.openweathermap.org/img/wn/${weather[0].icon}@4x.png" alt="w" />`;
    w_icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png
    " alt="w" />`;
 
    
    

      
     
    cityName.innerHTML = `${name} , ${getCountryName(sys.country)}`;
     dateTime.innerHTML = getDateTime(dt);
    f_l.innerHTML = data.main.feels_like
    w_min.innerHTML = `${main.temp_min}&#176`;
    w_max.innerHTML = `${main.temp_max}&#176`;
    hum.innerHTML = `${data.main.humidity}%`
    pre.innerHTML = `${data.main.pressure}hpa`;
    w_i.innerHTML = `${wind.speed}m/s`;
    w_temperature.innerHTML = `${main.temp}&#176`;

    }
    catch(error){
        console.log(error)
    }
  };
  
  document.body.addEventListener("load", getWeatherData());
