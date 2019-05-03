$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.main').hide();
    $('.section-new-search').hide();
});

// display on search
$(document).on("click", "#search-btn", function () {
    $('.main').show();
    $('.section-new-search').show();
    $('.slider-container').hide();
    $('.search-container').hide();
});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 4000
});

$(document).on("click", '#new-search', function () {
    $('.main').hide();
    $('.section-new-search').hide();
    $('.slider-container').show();
    $('.search-container').show();

});







// **** Start of Firebase ****


$(".btn").on("click", function (e) {
    e.preventDefault();

    var currentZip = parseInt($("#search").val())
    var newCount;




    database.ref("zipcode").once("value", function (snapshot) {

        if (snapshot.child(currentZip).exists()) {

            newCount = snapshot.child(currentZip).val()
            newCount = (newCount.count + 1)
            database.ref("zipcode").child(currentZip).update({
                count: newCount
            })
            return;
        }

        else {
            database.ref("zipcode/" + currentZip).set({
                count: 1
            })
        }

    })

})