$(document).ready(function(){
	var triggerElement = '';
	var brickRed = "#d52941";
	var logo = $("#logo");
	var deviceGalleryContainer = $("#device-gallery-container");

	var controller = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene({
		offset: 70
	});
	console.log(window.innerWidth);
	console.log(window.innerHeight);
	if (window.innerWidth <= 676) {
		TweenMax.set(logo, {backgroundImage: "url('img/nexme_logo_red.png')"});
	}else{
		var logoToRed = TweenMax.to(logo, 0, {backgroundImage: "url('img/nexme_logo_red.png')"});
		scene.setTween(logoToRed)
		controller.addScene(scene);
	}


	var offset = window.innerHeight / 2 + $("#mainNav").height() - 50
	var scene2 = new ScrollMagic.Scene({
		triggerElement: triggerElement,
		duration: window.innerHeight,
		offset: offset
	});
	scene2.setPin(triggerElement)

	var captionScene = new ScrollMagic.Scene({
		triggerElement: triggerElement,
		duration: window.innerHeight,
		offset: offset
	})

	var screenshotTimeline = new TimelineMax();
	var captionTimeline = new TimelineMax();
	screenshotTimeline.to(".screenshot", 0.5, {y: "-100%"});
	captionTimeline.to(".screenshotCaption", 0.5, {y: "-100%"});
	screenshotTimeline.to(".screenshot", 0.5, {y: "-200%"});
	captionTimeline.to(".screenshotCaption", 0.5, {y: "-200%"});
	screenshotTimeline.to(".screenshot", 0.5, {y: "-300%"});
	captionTimeline.to(".screenshotCaption", 0.5, {y: "-300%"});

	scene2.setTween(screenshotTimeline);
	captionScene.setTween(captionTimeline);

	controller.addScene(scene2);
	controller.addScene(captionScene);
})
