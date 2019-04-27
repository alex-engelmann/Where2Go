//api key = 166a433c57516f51dfab1f7edaed8413
//api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}
var zipcode;
var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" + zipcode + "&cnt=7&APPID=166a433c57516f51dfab1f7edaed8413"


function appendThings(info) {
    newImg = $("<img src=" + info[2] + ">")
    $("#event-1-name").append(newImg)
}



function weather(queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            console.log(response)
            console.log("*****************")

            // arrays represent days of weather, [0] = temperature, [1] = weather description, [2] = weather icon, [3] = day of the week
            let day1 = [response.list[0].temp.day, response.list[0].weather[0].main, "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png", moment.unix(response.list[0].dt).format("dddd")]
            let day2 = [response.list[1].temp.day, response.list[1].weather[0].main, "http://openweathermap.org/img/w/" + response.list[1].weather[0].icon + ".png", moment.unix(response.list[1].dt).format("dddd")]
            let day3 = [response.list[2].temp.day, response.list[2].weather[0].main, "http://openweathermap.org/img/w/" + response.list[2].weather[0].icon + ".png", moment.unix(response.list[2].dt).format("dddd")]
            let day4 = [response.list[3].temp.day, response.list[3].weather[0].main, "http://openweathermap.org/img/w/" + response.list[3].weather[0].icon + ".png", moment.unix(response.list[3].dt).format("dddd")]
            let day5 = [response.list[4].temp.day, response.list[4].weather[0].main, "http://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png", moment.unix(response.list[4].dt).format("dddd")]
            let day6 = [response.list[5].temp.day, response.list[5].weather[0].main, "http://openweathermap.org/img/w/" + response.list[5].weather[0].icon + ".png", moment.unix(response.list[5].dt).format("dddd")]
            let day7 = [response.list[6].temp.day, response.list[6].weather[0].main, "http://openweathermap.org/img/w/" + response.list[6].weather[0].icon + ".png", moment.unix(response.list[6].dt).format("dddd")]

            console.log(day1)
            console.log(day2)
            console.log(day3)
            console.log(day4)
            console.log(day5)
            console.log(day6)
            console.log(day7)
            appendThings(day1)
        });
}

$(".btn").on("click", function (e) {
    e.preventDefault();
    var zipcode = $("#search").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" + zipcode + "&cnt=7&APPID=166a433c57516f51dfab1f7edaed8413&units=imperial"

    console.log(queryURL)
    weather(queryURL)
})