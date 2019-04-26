// "use strict";

var apiKey = "19PWD0Q8SBucz7O5e8TiQLaoKcsZPFA8-tHMDxmJx_gd-nI4gecHyB6s_Cb3Y5A5HQik0uaWr35Z21PSXvJW-TIA1zr82giN7soQckjYi71Cd45Cw-4MEtP72bS_XHYx";

var place = $("#zipcode").val();
console.log(place);

place = "Sacramento";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
var queryUrl = "https://api.yelp.com/v3/events?location=" + place;

$.ajaxSetup({
    beforeSend: function (xhr) {
        { xhr.setRequestHeader("Authorization", "Bearer " + apiKey) };
    }
});

// Creating an AJAX call for the specific giphy button being clicked
$.ajax({
    url: proxyUrl + queryUrl,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
