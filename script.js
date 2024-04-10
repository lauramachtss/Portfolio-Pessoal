$(document).ready(function () {
   
    $(".fab").hover(function () {
        $(this).css("transform", "scale(1.2)");
    }, function () {
        $(this).css("transform", "scale(1)");
    });

  
    $(".fab").click(function () {
        $(this).animate({ rotation: 360 }, {
            duration: 1000,
            step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
        });
    });
    $(".fab").css("font-size", "250%");
});