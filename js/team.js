(function($) {


	var teamtl = new TimelineMax();
	//

	teamtl.to("#mem1",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem2",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem3",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem4",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem5",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem6",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem7",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem8",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem9",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem10",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem11",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem12",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem13",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem14",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem15",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem16",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem17",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem18",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem19",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem20",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem21",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem22",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem23",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem24",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem25",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem26",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem27",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem28",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem29",1,{scale:1,ease:Bounce.easeOut})
	  .to("#mem30",1,{scale:1,ease:Bounce.easeOut});



	var teamscene = new ScrollMagic.Scene({
		triggerElement:"#trigger",
		triggerHook:0.1, //0.5
		duration: 700, //1000
	})
		.addTo(controller)
		.setTween(teamtl);

  var teampin = new ScrollMagic.Scene({
    triggerElement:"#trigger",
    triggerHook:0.1,
    duration:100
  })
    .addTo(controller)
    .addIndicators({name:"teampin"})
    .setPin("#team");


	/*

	//unpin
	var unpinSlide = document.querySelectorAll("div.unpin");
	var scene2 = new ScrollMagic.Scene({
	    triggerElement: "unpin"
	})
		.addIndicators({
		    colorStart: "rgba(255,255,255,0.5)",
		    colorEnd: "rgba(255,255,255,0.5)",
		    colorTrigger : "rgba(255,255,255,1)",
		    name: 'unpin'
		})
		.setClassToggle(".bg-blue, .bg-red", "bg-white")
		.on("enter", function (e) {
		    scene.destroy(true);
		})
		.addTo(controller)
		.addIndicators();

	*/




	//TweenLite.from(img, 1, {x: -200, ease:Bounce.easeOut});
	//TweenLite.from(h3, 1, {autoAlpha:0, delay:0.5});
	//TweenLite.from(h4, 1, {autoAlpha:0, delay:0.7});
	//TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});
	//TweenLite.to(img, 1, {width: 100});



})(jQuery);
