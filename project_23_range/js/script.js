$(function () {
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: 400,
        to: 500,
        prefix: "UA"
    });  

})