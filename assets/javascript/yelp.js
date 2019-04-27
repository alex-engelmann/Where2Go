"use strict";

var getEvents = function () {

    //Find out today's date

    
    console.log(moment().format('l'));

    //Get location from user
    var place = $("#zipcode").val();
    console.log(place);


    //Set up AJAX for the API call
    var apiKey = "19PWD0Q8SBucz7O5e8TiQLaoKcsZPFA8-tHMDxmJx_gd-nI4gecHyB6s_Cb3Y5A5HQik0uaWr35Z21PSXvJW-TIA1zr82giN7soQckjYi71Cd45Cw-4MEtP72bS_XHYx";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    var queryUrl = "https://api.yelp.com/v3/events?location=" + place;

    //Make the Yelp Fusion API call
    $.ajax({
        beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + apiKey)},
        
        url: proxyUrl + queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        console.log(response.events["0"].event_site_url);
        console.log(response.events["0"].image_url);
        console.log(response.events["0"].name);
        console.log(response.events["0"].description);

    });

}
$(document).on("click", ".btn", function () {
    getEvents();
})






