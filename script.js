function fetchData(){
    lc=search.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${lc}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then(data=>data.json()).then(data=>displayData(data));
}
// Location code
function mylocdata(){
    locdatasearch = (position)=>{
    lat = position.coords.latitude;
    lon = position.coords.longitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then(data=>data.json()).then(data=>displayData(data))

};

navigator.geolocation.getCurrentPosition(locdatasearch);}
// Location code
function displayData(wData){
    // card1 data
   tempData=Math.floor((JSON.parse(wData.main.temp))-273.1);
   weatherData=wData.weather[0].main;
   locData=wData.name;

//    temp.innerHTML=`${tempData} &#8451`
//    weather.innerHTML=`${weatherData}`
//    loc.innerHTML=`${locData}`

   //card2 data
   highData=Math.floor((JSON.parse(wData.main.temp_max))-273.1);
   lowData=Math.floor((JSON.parse(wData.main.temp_min))-273.1);
   flData=Math.floor((JSON.parse(wData.main.feels_like))-273.1);

//    hg.innerHTML=`High: ${highData} &#8451`
//    low.innerHTML=`Low: ${lowData} &#8451`
//    fl.innerHTML=`Feels: ${flData} &#8451`

   //card3
   humData=wData.main.humidity;
   windData=wData.wind.speed;
   pressData=wData.main.pressure;

//    hum.innerHTML=`Humidity: ${humData} %`
//    wind.innerHTML=`Wind Speed: ${windData} m/s`
//    press.innerHTML=`Pressure${pressData}`


   //innerHTML
   result.innerHTML=`
   <div class="row">
        <div class="col-lg-4 col-md-12">
            <div class="card" style="width: 18rem;">
                <img class="cimg" src="./images/1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="info" id="weather">${locData}</p>
                  <p class="info" id="loc">${tempData} &#8451</p>
                  <p class="info" id="temp">${weatherData}</p>
                </div>
              </div>
        </div>
        <div class="col-lg-4 col-md-12">
            <div class="card" style="width: 18rem;">
                <img class="cimg" src="./images/highlow.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="info" id="hg">High: ${highData} &#8451</p>
                  <p class="info" id="low">Low: ${lowData} &#8451</p>
                  <p class="info" id="fl">Feels: ${flData} &#8451</p>
                </div>
              </div>
        </div>
        <div class="col-lg-4 col-md-12">
            <div class="card" style="width: 18rem;">
                <img class="cimg" src="./images/3.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="info" id="hum">Humidity: ${humData} %</p>
                    <p class="info" id="wind">Wind Speed: ${windData} m/s</p>
                    <p class="info" id="press">Pressure${pressData}</p>
                </div>
              </div>
        </div>
       </div>
   `

}