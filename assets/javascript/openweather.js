//api key = 166a433c57516f51dfab1f7edaed8413
//api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}
var zipcode;
var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" + zipcode + "&cnt=5&APPID=166a433c57516f51dfab1f7edaed8413"



var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?zip=95628&cnt=5&APPID=166a433c57516f51dfab1f7edaed8413"
function weather(queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {
            console.log(response)
        });
}

$(".btn").on("click", function (e) {
    e.preventDefault();
    var zipcode = $("#zipcode").val();

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" + zipcode + "&cnt=5&APPID=166a433c57516f51dfab1f7edaed8413"
    console.log(queryURL)
    weather(queryURL)
})