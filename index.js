// Smooth Scroll on anchor links
(function() {

    'use strict';

   // Feature Test
   if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

       // Function to animate the scroll
       var smoothScroll = function (anchor, duration) {

           // Calculate how far and how fast to scroll
           var startLocation = window.pageYOffset;
           var endLocation = anchor.offsetTop;
           var distance = endLocation - startLocation;
           var increments = distance/(duration/16);
           var stopAnimation;

           // Scroll the page by an increment, and check if it's time to stop
           var animateScroll = function () {
               window.scrollBy(0, increments);
               stopAnimation();
           };

           // If scrolling down
           if ( increments >= 0 ) {
               // Stop animation when you reach the anchor OR the bottom of the page
               stopAnimation = function () {
                   var travelled = window.pageYOffset;
                   if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                       clearInterval(runAnimation);
                   }
               };
           }
           // If scrolling up
           else {
               // Stop animation when you reach the anchor OR the top of the page
               stopAnimation = function () {
                   var travelled = window.pageYOffset;
                   if ( travelled <= (endLocation || 0) ) {
                       clearInterval(runAnimation);
                   }
               };
           }

           // Loop the animation function
           var runAnimation = setInterval(animateScroll, 16);
      
       };

       // Define smooth scroll links
       var scrollToggle = document.querySelectorAll('.scroll');

       // For each smooth scroll link
       [].forEach.call(scrollToggle, function (toggle) {

           // When the smooth scroll link is clicked
           toggle.addEventListener('click', function(e) {

               // Prevent the default link behavior
               e.preventDefault();

               // Get anchor link and calculate distance from the top
               var dataID = toggle.getAttribute('href');
               var dataTarget = document.querySelector(dataID);
               var dataSpeed = toggle.getAttribute('data-speed');

               // If the anchor exists
               if (dataTarget) {
                   // Scroll to the anchor
                   smoothScroll(dataTarget, dataSpeed || 500);
               }

           }, false);

       });

   }

    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

})();

function myFunction(x) {
    if (x.matches) { // If media query matches
        $('.chart').easyPieChart({
            scaleColor: "#ecf0f1",
            lineWidth: 20,
            lineCap: 'butt',
            barColor: '#26c2c0',
            trackColor:	"#ecf0f1",
            size: 160,
            animate:1300
        });
    } 
}
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes


//Smooth Scroll
SmoothScroll({
   // Scrolling Core
   animationTime    : 400, // [ms]
   stepSize         : 100, // [px]

   // Acceleration
   accelerationDelta : 50,  // 50
   accelerationMax   : 3,   // 3

   // Keyboard Settings
   keyboardSupport   : true,  // option
   arrowScroll       : 50,    // [px]

   // Pulse (less tweakable)
   // ratio of "tail" to "acceleration"
   pulseAlgorithm   : true,
   pulseScale       : 4,
   pulseNormalize   : 1,

   // Other
   touchpadSupport   : false, // ignore touchpad by default
   fixedBackground   : true, 
   excluded          : ''    
});

// Change style of navbar on scroll
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
});

$(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});

// Modal Image Gallery
    function onClick(element) {
        let source = element.src;
        document.getElementById("img01").src = element.src;

        if(source.includes("nexme1.jpg"))
        {
            console.log(source)
            document.getElementById("img02").src = "./nexme2.jpg";
            document.getElementById("img03").src = "./nexme3.jpg";
        }
        if(source.includes("laptop.jpg"))
        {
            document.getElementById("img02").src = "./map.jpg";
            document.getElementById("img03").src = "./courses.jpg";
        }
        if(source.includes("CeHome.jpg"))
        {
            document.getElementById("img02").src = "./Ce2.jpg";
            document.getElementById("img03").src = "./Ce3.jpg";
        }
        // document.getElementById("modal01").style.display = "block";
    }

    

// skills secition code.

$(document).ready(function(){

    $('.aScroll').click(function(){
        $('.chart').easyPieChart({
            scaleColor: "#ecf0f1",
            lineWidth: 20,
            lineCap: 'butt',
            barColor: '#26c2c0',
            trackColor:	"#ecf0f1",
            size: 160,
            animate:1300
        });
    })
    $('#about').mouseenter(function(){
        $('.chart').easyPieChart({
            scaleColor: "#ecf0f1",
            lineWidth: 20,
            lineCap: 'butt',
            barColor: '#26c2c0',
            trackColor:	"#ecf0f1",
            size: 160,
            animate:1300
        });
    })

    $('#skills').mouseenter(function(){
        $('.chart').easyPieChart({
            scaleColor: "#ecf0f1",
            lineWidth: 20,
            lineCap: 'butt',
            barColor: '#26c2c0',
            trackColor:	"#ecf0f1",
            size: 160,
            animate:1300
        });
    }) 
})

