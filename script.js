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
            $(".fab").css("font-size", "260%");
        });
        $(document).ready(function () {

            $(".nav-link").hover(function () {
                $(this).addClass("active");
            }, function () {
                $(this).removeClass("active");
            });

            $(".nav-link").click(function () {
                $(this).addClass("active");
            });
        });
        $(document).ready(function () {
            
            $(".nav-link").hover(function () {
                $(this).css("transform", "scale(1.1)");
            }, function () {
                $(this).css("transform", "scale(1)");
            });
        });
