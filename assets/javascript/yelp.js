
//Set this as global in case anyone else wants event info
let local_events = []

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
        + "&limit=50"
        + "&sort_on=time_start"
        + "&sort_by=desc";

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

        // let day0 = [];
        // let day1 = [];
        // let day2 = [];
        // let day3 = [];
        // let day4 = [];
        // let day5 = [];
        // let day6 = [];

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

        //TODO make this more efficient using one big for loop, this is not DRY code
        
        for (var dayNumber = 0; dayNumber < 7; dayNumber++) {
            for (let i = 0; i < local_events.length; i++) {
                if (moment(local_events[i].time_start).isSame(moment().add(dayNumber, 'days'), 'day')) {
                    days[dayNumber].push(local_events[i]);
                }
            }
        }
        console.log(days);

        $("#event-1-name").text(days[3][0].name);
        //TODO ask Jim for a better way to do this
        $("#event-1-description").text(days[3][0].description + "\n" + days[3][0].event_site_url);

        $("#event-1-image").attr("src", days[3][0].image_url);



        //This is old testing code -
        //TODO delete this when finished

        // if (moment('2010-01-01').isSame('2010-01-03', 'day')) {
        //     console.log("moments are same day");
        // } else {
        //     console.log("moments are different day")
        // }     

        // console.log(response.events["0"].name);
        // console.log(response.events["0"].description);
        // console.log(response.events["0"].event_site_url);
        // console.log(response.events["0"].image_url);
        // console.log(response.events["0"].time_start);

    });

}
$(document).on("click", ".btn", function () {
    getEvents();
})






