
var apiKey = "19PWD0Q8SBucz7O5e8TiQLaoKcsZPFA8-tHMDxmJx_gd-nI4gecHyB6s_Cb3Y5A5HQik0uaWr35Z21PSXvJW-TIA1zr82giN7soQckjYi71Cd45Cw-4MEtP72bS_XHYx"

// var location = "Sacramento";

var queryURL = "https://api.yelp.com/v3/events/search?" + "location=" + "Sacramento" + "&api_key=" + apiKey

// Creating an AJAX call for the specific giphy button being clicked
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
      console.log(response);

    // Creating a div to hold the giphy
    var giphyDiv = $("<div class='container'>");

    // Adding the div to the page
    // $("#giphys-here").empty().prepend(giphyDiv);
  });