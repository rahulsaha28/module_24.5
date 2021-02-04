/***
 * cloud: weather[0].description
 * city name: name
 * temp: main.temp
 * icon: weather[0].icon
 */



// api call
function getApiData(city, key, callBack) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(res => res.json())
        .then(data => callBack(data));
}


// update UI
function updateUI(data) {
    if (data.cod == 200) {
        let imgLink = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("w-city").innerHTML = data.name;
        document.getElementById("w-tem").innerHTML = data.main.temp;
        document.getElementById("w-description").innerHTML = data.weather[0].description;
        document.getElementById("w-icon").src = imgLink;
    }
    
}



// event happen
document.getElementById("search").addEventListener("click", function () {
    let input = document.getElementById("input-city");
    if (input.value) {
        getApiData(input.value, "64c7edf9f5c8fa84019ec1366d21ef8c", (data) => {
            updateUI(data);
            input.value = "";
        })
    }
    else {
        input.value = "";
    }
});


