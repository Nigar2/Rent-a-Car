$(document).ready(function() {

	// AOS ANIMATIONS
    AOS.init({
    	duration: 1000,
    	easing: 'ease-in-sine',
    });

    // CLOSE MENU WITH CLICK ON LINK
    var link = $(".navigation__link");
    var button = document.getElementById("navigation-toggle");
    link.on("click", function(e) {
        button.checked = false;
    });

    // CLOSE PRELOADER
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3000);

});

