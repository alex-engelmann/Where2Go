
var getEvents = function () {

    //Find out today's date in UNIX time for the API

    var startUnixTime = moment().unix();
    var endUnixTime = moment().add(6, 'days').unix();

    //Get location from user
    var place = $("#search").val();

    //Set up variables for API call
    var apiKey = "REDACTED";
    //was getting a 403 error anyways, will just remove my API key from here
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
            }
        }
    });

}
$(document).on("click", ".btn", function () {
    getEvents();
})






