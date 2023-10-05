searchcity = `ghaziabad`;
let detail = document.getElementById("detail");

let frame = document.getElementById("gmap_canvas");
frame.src = `https://maps.google.com/maps?q=${searchcity}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

let Wurl = `https://api.openweathermap.org/data/2.5/weather?q=${searchcity},IN&appid=53e18bd79a3b51b21968106541a614ce`;

let weather = async () => {
  try {
    let res = await fetch(Wurl);
    let data = await res.json();
    console.log(data);
    printdata(data);
  } catch (error) {
    console.log(error);
  }
};
let printdata = (data) => {
  data.forEach((ele) => {
    let city = document.createElement("h3");
    city.textContent = ele.name;
    let weather = document.createElement("h2");
    weather.textContent = ele.weather.description;
    let temp = document.createElement("p");
    temp.textContent = `${ele.main.temp} f'`;

    detail.append(city, weather, temp);
  });
};

weather();
