let searchcity = document.getElementById("city")
let country = document.getElementById("country")
let detail = document.getElementById("detail");
detail.innerHTML = "<h3>Search city for temp</h3>";
let daily = document.getElementById("daily");
let frame = document.getElementById("gmap_canvas");
var lat = 0;
var lon = 0;
let flag = true;

function show(){
  detail.innerHTML = "";
  frame.src = `https://maps.google.com/maps?q=${searchcity.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
 if(flag){
  flag = false;
  let weather = async () => {
  try {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchcity.value},${country.value}&appid=53e18bd79a3b51b21968106541a614ce`);
    let data = await res.json();
    console.log(data);
    printdata(data);
  } catch (error) {
    console.log(error);
  }
};
let printdata = (data) => {
  let city = document.createElement("h1");
  city.textContent = data.name;
  let weather = document.createElement("h2");
  weather.textContent = data.weather[0].description;
  let temp = document.createElement("p");
  temp.textContent = `Temp : ${(data.main.temp-273.15).toFixed(2)} c°`;
  let feels = document.createElement("p");
  feels.textContent = `Feels like : ${(data.main.feels_like-273.15).toFixed(2)} c°`

  lat = +data.coord.lat;
  lon = +data.coord.lon;
  detail.append(city, weather, temp, feels);

};
 weather();
 }
 console.log(lat,lon)
}


function reset(){
  if(flag==false){
    flag = true;
    searchcity.value = "";
    detail.innerHTML = "<h3>Search city for temp</h3>";
    frame.src = `https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  }
}
let forcast = async ()=>{
  try {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=28.6667&lon=77.2167&appid=53e18bd79a3b51b21968106541a614ce`)
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error)
  }
}


forcast();




