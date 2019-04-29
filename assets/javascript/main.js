$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.main').hide();
});

// display on search
$(document).on("click", ".btn", function () {
    $('.main').show();
    $('.slider-container').hide();
    $('.search-container').hide();
})

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 4000
})