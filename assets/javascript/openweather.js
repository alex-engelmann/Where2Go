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

            // arrays represent days of weather, [0] = temperature, [1] = weather description, [2] = weather icon, [3] = day of the week
            let day1 = [response.list[0].temp.day, response.list[0].weather[0].main, "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png", moment.unix(response.list[0].dt).format("dddd")]
            let day2 = [response.list[1].temp.day, response.list[1].weather[0].main, "http://openweathermap.org/img/w/" + response.list[1].weather[0].icon + ".png", moment.unix(response.list[1].dt).format("dddd")]
            let day3 = [response.list[2].temp.day, response.list[2].weather[0].main, "http://openweathermap.org/img/w/" + response.list[2].weather[0].icon + ".png", moment.unix(response.list[2].dt).format("dddd")]
            let day4 = [response.list[3].temp.day, response.list[3].weather[0].main, "http://openweathermap.org/img/w/" + response.list[3].weather[0].icon + ".png", moment.unix(response.list[3].dt).format("dddd")]
            let day5 = [response.list[4].temp.day, response.list[4].weather[0].main, "http://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png", moment.unix(response.list[4].dt).format("dddd")]
            let day6 = [response.list[5].temp.day, response.list[5].weather[0].main, "http://openweathermap.org/img/w/" + response.list[5].weather[0].icon + ".png", moment.unix(response.list[5].dt).format("dddd")]
            let day7 = [response.list[6].temp.day, response.list[6].weather[0].main, "http://openweathermap.org/img/w/" + response.list[6].weather[0].icon + ".png", moment.unix(response.list[6].dt).format("dddd")]


            var newImg = $("<img src=" + day1[2] + ">")
            $("#current-date").text(day1[3] + " " + Math.floor(day1[0]) + String.fromCharCode(176))
            $("#current-date").append(newImg)

            var newImg = $("<img src=" + day2[2] + ">")
            $("#current-date1").text(day2[3] + " " + Math.floor(day2[0]) + String.fromCharCode(176))
            $("#current-date1").append(newImg)

            var newImg = $("<img src=" + day3[2] + ">")
            $("#current-date2").text(day3[3] + " " + Math.floor(day3[0]) + String.fromCharCode(176))
            $("#current-date2").append(newImg)

            var newImg = $("<img src=" + day4[2] + ">")
            $("#current-date3").text(day4[3] + " " + Math.floor(day4[0]) + String.fromCharCode(176))
            $("#current-date3").append(newImg)

            var newImg = $("<img src=" + day5[2] + ">")
            $("#current-date4").text(day5[3] + " " + Math.floor(day5[0]) + String.fromCharCode(176))
            $("#current-date4").append(newImg)

            var newImg = $("<img src=" + day6[2] + ">")
            $("#current-date5").text(day6[3] + " " + Math.floor(day6[0]) + String.fromCharCode(176))
            $("#current-date5").append(newImg)

            var newImg = $("<img src=" + day7[2] + ">")
            $("#current-date6").text(day7[3] + " " + Math.floor(day7[0]) + String.fromCharCode(176))
            $("#current-date6").append(newImg)

        });
}

$(".btn").on("click", function (e) {
    e.preventDefault();
    var zipcode = $("#search").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" + zipcode + "&cnt=7&APPID=166a433c57516f51dfab1f7edaed8413&units=imperial"
    weather(queryURL)
})