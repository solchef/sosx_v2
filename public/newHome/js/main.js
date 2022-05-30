$(function($) {

  "use strict";


/*=========================== scroll background ===========================*/

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    // Activate menu
    if (wScroll >50) {
      $('.navbar').addClass('active_sc');
    }
    else {
      $('.navbar').removeClass('active_sc');
    };
        
  });

  /*=========================== close scroll background ===========================*/
  



  /*=========================== preloader ===========================*/
  // Wait for window load
  $(window).on('load', function() {
     $(".se-pre-con").fadeOut("slow");;
  });

  /*=========================== preloader ===========================*/

  /*=========================== smooth menu ===========================*/
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#xenav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
  /*=========================== smooth menu ===========================*/

 


  /*=========================== screenshot app ===========================*/

 var owls = $("#screenshot-owl");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        items: 4,
        loop: true,
        center: false,
        margin: 20,
        stagePadding: 0,
        dots:true,
        nav:false,

        animateOut:'fadeOutDown',
        animateIn:'fadeInDown',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            768: {
                items: 4,
                nav: false,
                loop: true
            }
        }
    });

  /*=========================== screenshot app ===========================*/





  /*=========================== our team ===========================*/

 var owls = $("#team-slider");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        items: 3,
        loop: true,
        center: false,
        margin: 10,
        stagePadding: 0,
        dots:true,
        nav:false,

        animateOut:'fadeOutDown',
        animateIn:'fadeInDown',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,

            },
            768: {
                items: 3,
    
                loop: true
            }
        }
    });

  /*=========================== our team ===========================*/



  /*=========================== testimonials ===========================*/

 var owls = $("#testimonial-owl");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        items: 2,
        loop: true,
        center: false,
        margin: 15,
        stagePadding: 0,
        dots:false,
        nav:true,

        animateOut:'fadeOutDown',
        animateIn:'fadeInDown',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            768: {
                items: 2,
                nav: true,
                loop: true
            }
        },
        navText : ["<i class='fas fa-angle-left fa-2x'></i>","<i class='fas fa-angle-right fa-2x'></i>"]        
    });

  /*=========================== testimonials ===========================*/



  /*=========================== home slider ===========================*/

 var owls = $("#home-slider-owl");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        items: 1,
        loop: true,
        center: false,
        margin: 0,
        stagePadding: 0,
        dots:true,
        nav:false,

        animateOut:'fadeOut',
        animateIn:'fadeInLeft',

    });
  /*=========================== home slider ===========================*/




  
 // ------------------------------- AOS Animation 
        AOS.init({
          duration: 1000,
          mirror: true
        });



});



//maps
function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.674, lng: -73.945},
          zoom: 12,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
      }


  /*=========================== particle ===========================*/



  /*=========================== particle ===========================*/

const params = new URLSearchParams(window.location.search)

let checkRef = params.get('ref')
// console.log(checkRef);
if(!localStorage.getItem('referral')){
    if(checkRef){
      localStorage.setItem('referral', checkRef);
    }
  }

    let swap_link = document.getElementById('dapp_url_swap');
    let staking_link = document.getElementById('dapp_url_staking');
    let swap_link2 = document.getElementById('dapp_url_swap2');
    let game_link = document.getElementById('dapp_url_game');

    if(swap_link){
        swap_link.addEventListener("click", function() {
          if(localStorage.getItem('referral')){
              window.location.href = "https://app.socialx.io?ref="+localStorage.getItem('referral')
          }else{
            window.location.href = "https://app.socialx.io"
          }
    
        });
    }
    

    if(staking_link){
      staking_link.addEventListener("click", function() {
        if(localStorage.getItem('referral')){
            window.location.href = "https://app.socialx.io?ref="+localStorage.getItem('referral')
        }else{
          window.location.href = "https://app.socialx.io"
        }
      });
    }
   

    if(swap_link2){
      swap_link2.addEventListener("click", function() {
        if(localStorage.getItem('referral')){
            window.location.href = "https://app.socialx.io?ref="+localStorage.getItem('referral')
        }else{
          window.location.href = "https://app.socialx.io"
        }
      });
  
    }
    if(game_link){
      game_link.addEventListener("click", function() {
        if(localStorage.getItem('referral')){
            window.location.href = "https://app.socialx.io/xgame?ref="+localStorage.getItem('referral')
        }else{
          window.location.href = "https://app.socialx.io/xgame"
        }
      });
  
    }


    if (window.ethereum == 'undefined') {
      // alert("gf")
      console.log(window.ethereum);

      // let web3 =  new Web3(window.ethereum)
    }

  
