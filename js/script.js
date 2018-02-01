
$(document).ready(function() {

	"use strict";
	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	}); 
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('.navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });


/*-- =============================================== -->
<!-- ========== bootstrap scrollspy ========== -->
<!-- =============================================== --> */
    
    
    $('body').scrollspy({
    	target: '.navbar',
    	offset: 160
    });



/*<!-- =============================================== -->
<!-- ========== scrollTop.js ========== -->
<!-- =============================================== -->*/

    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });



/*<!-- =============================================== -->
<!-- ========== scrolldown.js ========== -->
<!-- =============================================== -->*/

$('.scrolldown a').bind('click', function () {
    $('html , body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 160
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});


/*<!-- =============================================== -->
<!-- ========== navbardown.js ========== -->
<!-- =============================================== -->*/

$('.nav a').bind('click', function () {
    $('html , body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top -0
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});






/*<!-- =============================================== -->
<!-- ========== fancy box ========== -->
<!-- =============================================== -->*/



//
//	$(".youtube-media").on("click", function(e) {
//		var jWindow = $(window).width();
//		if (jWindow <= 410) {
//			return;
//		}
//		$.fancybox({
//			href: this.href,
//			padding: 4,
//			type: "iframe",
//			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
//		});
//		return false;
//	});



/*<!-- =============================================== -->
<!-- ========== portfolio section ========== -->
<!-- =============================================== -->*/



$('#portfolio a').nivoLightbox({
	effect: 'fadeScale'
});



/*<!-- =============================================== -->
<!-- ========== owlcarousel team ========== -->
<!-- =============================================== -->*/



	
	$(".gallery_carousel").owlCarousel({

		/*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],

		pagination : true,
		paginationNumbers: false,


		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window

	});



	$(".main_testimonial_text").owlCarousel({

	/*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
	items :1,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3],
	pagination : true,
	paginationNumbers: false,
	singleItem:true,
	responsive: true,
	responsiveRefreshRate : 200,
	responsiveBaseWidth: window

	});


 new WOW().init();

}); 






//<!-- =============================================== -->
//<!-- ========== Navbar ========== -->
//<!-- =============================================== -->


	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var batas = 800;
                var logo = 'images/logo.png';
                var logoScroll = 'images/logo2.png';
	  //alert(batas);
	  
	  if (top > batas) {
		jQuery('.main-menu').addClass('tiny');
		jQuery('.main-menu').css('opacity','1');
        jQuery('.navbar-brand img').attr('src',logoScroll);
	  } else {
	   jQuery('.main-menu').removeClass('tiny'); 
        jQuery('.navbar-brand img').attr('src',logo);
	  }
	});


//
//<!-- =============================================== -->
//<!-- ========== Map ========== -->
//<!-- =============================================== -->


$(document).ready(function() {


 google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ec46c0"},{"visibility":"on"}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'Snazzy!'
                });
            }


});	

var me = {};
me.avatar = "https://lh6.googleusercontent.com/-lr2nyjhhjXw/AAAAAAAAAAI/AAAAAAAARmE/MdtfUmC0M4s/photo.jpg?sz=48";

var you = {};
you.avatar = "https://a11.t26.net/taringa/avatares/9/1/2/F/7/8/Demon_King1/48x48_5C5.jpg";

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}            

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time = 0){
    var control = "";
    var date = formatAMPM(new Date());
    
    if (who == "me"){
        
        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';                    
    }else{
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p>'+text+'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
                  '</li>';
    }
    setTimeout(
        function(){                        
            $("ul").append(control);

        }, time);
    
}

function resetChat(){
    $("ul").empty();
}

$(".mytext").on("keyup", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChat("me", text);              
            $(this).val('');
        }
    }
});

//-- Clear Chat
resetChat();

//-- Print Messages
insertChat("me", "Olá, como vai?", 3500);  
insertChat("me", "Vi que você achou um cachorro...", 7000);
insertChat("you", "Oi! Tudo bem, e você?", 10500);
insertChat("you", "Achei sim, você perdeu o seu?",14000);
insertChat("me", "Sim. Um Pug com uma mancha na pata.", 17500);  

//-- NOTE: No use time on insertChat.   