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

// filter searchbox
(function($) {
    $.fn.inputFilter = function(inputFilter) {
      return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
      });
    };
   }(jQuery))
$("#search").inputFilter(function(value) {
    return /^\d*$/.test(value); });

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 4000
});

// reset button
function refreshPage(){
    window.location.reload();
}

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
