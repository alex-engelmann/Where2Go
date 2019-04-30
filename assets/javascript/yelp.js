"use strict";

var getEvents = function () {

    //Find out today's date

    console.log(moment().format('l'));
    var startUnixTime = moment().unix();
    var endUnixTime = startUnixTime + 604800;
    
    console.log("Start UNIX time: " + startUnixTime);

    //Get location from user
    var place = $("#search").val();
    console.log("Place: " + place);


    //Set up AJAX for the API call
    var apiKey = "19PWD0Q8SBucz7O5e8TiQLaoKcsZPFA8-tHMDxmJx_gd-nI4gecHyB6s_Cb3Y5A5HQik0uaWr35Z21PSXvJW-TIA1zr82giN7soQckjYi71Cd45Cw-4MEtP72bS_XHYx";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    var queryUrl = "https://api.yelp.com/v3/events?location=" + place 
    + "&start_date=" + startUnixTime
    + "&end_date=" + endUnixTime
    + "&limit=50"
    + "&sort_on=time_start"
    + "&sort_by=desc"
    
    ;

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
        console.log(response.events["0"].time_start);

    });

}
$(document).on("click", ".btn", function () {
    getEvents();
})






