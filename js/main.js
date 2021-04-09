$(document).ready(function () {
//  Change Navbar color
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".navbar").css("background", "#020202");
        }

        else {
            $(".navbar").css("background", "transparent");
        }
    })
});

// Close Toggler On Click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


// Smooth Scrolling
$('#navbarSupportedContent ul li a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var t = this.hash;
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1500, function () {
        window.location.hash = t;
    })
});
