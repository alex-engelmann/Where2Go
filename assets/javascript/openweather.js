//api key = 166a433c57516f51dfab1f7edaed8413
//api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}
var zipcode;
var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" + zipcode + "&cnt=7&APPID=166a433c57516f51dfab1f7edaed8413"




function weather(queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {
            //for loop creates arrays with api data and dynamically appends data
            for (let i = 0; i < 7; i++) {
                let day1 = [response.list[i].temp.day, response.list[i].weather[0].main, "http://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png", moment.unix(response.list[i].dt).format("dddd")]
                var newImg = $("<img src=" + day1[2] + ">")
                $("#current-date" + i).text(day1[3] + " " + Math.floor(day1[0]) + String.fromCharCode(176))
                $("#current-date" + i).append(newImg)
                console.log(newImg)
            }
        });
}

$(".btn").on("click", function (e) {
    e.preventDefault();
    var zipcode = $("#search").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" + zipcode + "&cnt=7&APPID=166a433c57516f51dfab1f7edaed8413&units=imperial"
    weather(queryURL)
})