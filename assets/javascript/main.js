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

$(document).on("click",'#new-search', function () {
    $('.main').hide();
    $('.section-new-search').hide();
    $('.slider-container').show();
    $('.search-container').show();

});