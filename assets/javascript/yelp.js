
var getEvents = function () {

    //Find out today's date in UNIX time for the API

    var startUnixTime = moment().unix();
    var endUnixTime = moment().add(6, 'days').unix();

    //Get location from user
    var place = $("#search").val();

    //Set up variables for API call
    var apiKey = "19PWD0Q8SBucz7O5e8TiQLaoKcsZPFA8-tHMDxmJx_gd-nI4gecHyB6s_Cb3Y5A5HQik0uaWr35Z21PSXvJW-TIA1zr82giN7soQckjYi71Cd45Cw-4MEtP72bS_XHYx";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    var queryUrl = "https://api.yelp.com/v3/events?location=" + place
        + "&start_date=" + startUnixTime
        + "&end_date=" + endUnixTime
        + "&limit=50";

    //Make the Yelp Fusion API call
    $.ajax({
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + apiKey)
        },

        url: proxyUrl + queryUrl,
        method: "GET"
    }).then(function (response) {
        // console.log("Returned by server below:")
        // console.log(response);

        let local_events = []

        for (let index = 0; index < response.events.length; index++) {
            local_events.push(
                {
                    name: response.events[index].name,
                    description: response.events[index].description,
                    event_site_url: response.events[index].event_site_url,
                    image_url: response.events[index].image_url,
                    time_start: response.events[index].time_start
                })
        }

        //Create an object to hold all the data organized by day


        const days = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
        }
        //Add events to each day
        for (var dayNumber = 0; dayNumber < 7; dayNumber++) {
            for (let i = 0; i < local_events.length; i++) {
                if (moment(local_events[i].time_start).isSame(moment().add(dayNumber, 'days'), 'day')) {
                    days[dayNumber].push(local_events[i]);
                }
            }
        }
        console.log(days);

        //Add the first event of each day to the card
        
        for (var day = 0; day < 7; day++) {
            if (days[day].length > 0) {
                $("#event-" + day + "-name").text(days[day][0].name);
                $("#event-" + day + "-link").attr("href", days[day][0].event_site_url);
                $("#event-" + day + "-description").text(days[day][0].description);
                $("#event-" + day + "-img").attr("src", days[day][0].image_url);
                console.log(day);
            }
        }

        // $("#event-0-name").text(days[0][0].name);
        // $("#event-0-link").attr("href", days[0][0].event_site_url);
        // $("#event-0-description").text(days[0][0].description);
        // $("#event-0-img").attr("src", days[0][0].image_url);

        // $("#event-1-name").text(days[1][0].name);
        // $("#event-1-link").attr("href", days[1][0].event_site_url);
        // $("#event-1-description").text(days[1][0].description);
        // $("#event-1-img").attr("src", days[1][0].image_url);

        // // $("#event-2-name").text(days[2][0].name);
        // // $("#event-2-link").attr("href", days[2][0].event_site_url);
        // // $("#event-2-description").text(days[2][0].description);
        // // $("#event-2-img").attr("src", days[2][0].image_url);

        // $("#event-3-name").text(days[3][0].name);
        // $("#event-3-link").attr("href", days[3][0].event_site_url);
        // $("#event-3-description").text(days[3][0].description);
        // $("#event-3-img").attr("src", days[3][0].image_url);

        // $("#event-4-name").text(days[4][0].name);
        // $("#event-4-link").attr("href", days[4][0].event_site_url);
        // $("#event-4-description").text(days[4][0].description);
        // $("#event-4-img").attr("src", days[4][0].image_url);

        // // $("#event-5-name").text(days[5][0].name);
        // // $("#event-5-link").attr("href", days[5][0].event_site_url);
        // // $("#event-5-description").text(days[5][0].description);
        // // $("#event-5-img").attr("src", days[5][0].image_url);

        // // $("#event-6-name").text(days[6][0].name);
        // // $("#event-6-link").attr("href", days[6][0].event_site_url);
        // // $("#event-6-description").text(days[6][0].description);
        // // $("#event-6-img").attr("src", days[6][0].image_url);







        //This is old testing code -
        //TODO delete this when finished

        // if (moment('2010-01-01').isSame('2010-01-03', 'day')) {
        //     console.log("moments are same day");
        // } else {
        //     console.log("moments are different day")
        // }     

    });

}
$(document).on("click", ".btn", function () {
    getEvents();
})






