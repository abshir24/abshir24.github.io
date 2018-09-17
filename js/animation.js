$(document).ready(function() {
    var iphone = $(".first-device"),
        headerContent = $(".header-content");

    var tl = new TimelineMax()

    tl.set(iphone, { y: 600, opacity: 0 })
    tl.set(headerContent, { opacity: 0 })
    tl.to(iphone, 1.5, { y: 0, opacity: 1, ease: Power3.easeInOut }, 0.4)
    tl.to(headerContent, 1.2, { opacity: 1 }, 1)

    // $(window).scroll(function() {
    //     $('video').each(function() {
    //         if ($(this).visible(true)) {
    //             $(this)[0].play();
    //         } else {
    //             $(this)[0].pause();
    //         }
    //     })
    // });

    
})
