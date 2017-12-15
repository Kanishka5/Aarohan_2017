$(document).ready(function(){
  //walk part----------------------------------------------
  var controller = new ScrollMagic.Controller();
  // var images2 = [
  //     "images/Walking/8.png",
  //     "images/Walking/7.png",
  //     "images/Walking/6.png",
  //     "images/Walking/5.png",
  //     "images/Walking/4.png",
  //     "images/Walking/3.png",
  //     "images/Walking/2.png",
  //     "images/Walking/1.png"
  //     ];
  //
  // // TweenMax can tween any property of any object. We use this object to cycle through the array
  // var obj2 = {curImg: 0};
  //
  // // create tween
  // var tween2 = TweenMax.to(obj2, 5,
  // {
  //     curImg: images2.length - 1,	// animate propery curImg to number of images
  //     roundProps: "curImg",				// only integers so it can be used as an array index
  //     repeat: 5,									// repeat 3 times
  //     immediateRender: true,			// load first image automatically
  //     ease: Linear.easeNone,			// show every image the same ammount of time
  //     onUpdate: function () {
  //         $("#img-walk").attr("src", images2[obj2.curImg]); // set the image source
  //     }
  // });
  //
  // // build scene
  // var scene5 = new ScrollMagic.Scene({triggerElement: ".next", duration: "250%",triggerHook:0})
  //     .setTween(tween2)
  //
  //     .addTo(controller);
  //----------------------------------------------------------
  var pincontent = new ScrollMagic.Scene({
      triggerElement:"#trigger1",
      triggerHook:0.2,
      duration:0
      })
      .setPin("#trigger2")
      .addTo(controller);
  var pinabout = new ScrollMagic.Scene({
      triggerElement:"#trigger1",
      triggerHook:0.2,
      duration:0
      })
      .setPin("#trigger1")
      .addTo(controller);

  var t2 = new TimelineMax();
  t2.from("#trigger1",2,{opacity:0,ease: Sine.easeOut})
  .from("#trigger2",2,{opacity:0, ease: Sine.easeOut},0);
  var about = new ScrollMagic.Scene({
      triggerElement:"#trigger1",
      triggerHook:0.15,
      duration:'30%'
      })
      .setTween(t2)
      .addTo(controller);

  var t3 = new TimelineMax();
  t3.to("#trigger2",2,{opacity:0,ease: Sine.easeOut})
      .to("#trigger1",2,{opacity:0, ease: Sine.easeOut},0);
  var out = new ScrollMagic.Scene({
      triggerElement:"#cloud",
      triggerHook:2,
      duration:'30%'
  })
  .setTween(t3)
  .addTo(controller);

  var playcloud = new ScrollMagic.Scene({
    triggerElement:"#trigger-w",
    triggerHook:0.5,
    duration:0
  })
    .setTween("#bike-img",1,{y:'500vh'})
    .addTo(controller);
  var t4 = new TimelineMax();
  t4.from("#bike-img",2,{top:'-50vh',ease: Sine.easeOut});


  var someother = new ScrollMagic.Scene({
    triggerElement:"#heading",
    triggerHook:0,
    duration:'70%'
  })
    .setTween(t4)
    .addTo(controller);

    var m1fadeintl = new TimelineMax();
    m1fadeintl
    .to("#m-1-left",1,{opacity:1});
    var m1fadein = new ScrollMagic.Scene({
      triggerElement:"#m1-trigger",
      triggerHook:0.8,
      duration:'30%'
    })
      .setTween(m1fadeintl)
      .addTo(controller);
    var m1tl = new TimelineMax();
    m1tl
      .to("#m-1",1,{y:'300vh'})
    ;

    var m1 = new ScrollMagic.Scene({
      triggerElement:"#m1-trigger",
      triggerHook:0.7,
      duration:'140%',
    })
      .setTween(m1tl)
      .addTo(controller);

    var m1fadeintl2 = new TimelineMax();
    m1fadeintl2
    .to("#m-2-right",1,{opacity:1});

    var m1fadein2 = new ScrollMagic.Scene({
      triggerElement:"#m2-trigger",
      triggerHook:0.8,
      duration:'30%'
    })
      .setTween(m1fadeintl2)
      .addTo(controller);

    var m2tl = new TimelineMax();
    m2tl
      .to("#m-2",1,{y:'300vh'})
    ;
    var m2 = new ScrollMagic.Scene({
      triggerElement:"#m2-trigger",
      triggerHook:0.6,
      duration:'140%',
      offset:200
    })
      .setTween(m2tl)
      .addTo(controller);

    var m1fadeintl3 = new TimelineMax();
    m1fadeintl3
    .to("#m-3-left",1,{opacity:1});
    // .to("#m-3-right",1,{scale:1.1,ease: Bounce.easeOut},0);;

    var m1fadein3 = new ScrollMagic.Scene({
      triggerElement:"#m3-trigger",
      triggerHook:0.8,
      duration:'30%'
    })
      .setTween(m1fadeintl3)
      .addTo(controller);

    var m3tl = new TimelineMax();
    m3tl
      .to("#m-3",1,{y:'300vh'});
    var m3 = new ScrollMagic.Scene({
      triggerElement:"#m3-trigger",
      triggerHook:0.6,
      duration:'140%',
      offset:200
    })
      .setTween(m3tl)
      .addTo(controller);


    var m1fadeintl4 = new TimelineMax();
    m1fadeintl4
    .to("#m-4-right",1,{opacity:1});
    // .to("#m-3-right",1,{scale:1.1,ease: Bounce.easeOut},0);;

    var m1fadein4 = new ScrollMagic.Scene({
      triggerElement:"#m4-trigger",
      triggerHook:0.8,
      duration:'30%'
    })
      .setTween(m1fadeintl4)
      .addTo(controller);

    var m4tl = new TimelineMax();
    m4tl
      .to("#m-4",1,{y:'300vh'});
    var m3 = new ScrollMagic.Scene({
      triggerElement:"#m4-trigger",
      triggerHook:0.6,
      duration:'140%',
      offset:200
    })
      .setTween(m4tl)
      .addTo(controller);

  // var walkf = new TimelineMax();
  // walkf.to("#img-walk",2,{opacity:0,ease: Sine.easeOut});
  // var out = new ScrollMagic.Scene({
  //     triggerElement:"#cloud",
  //     triggerHook:10.2,
  //     duration:'30%'
  // })
  // .setTween(t3)
  // .addTo(controller);
  // var walkpartfadeout = new ScrollMagic.Scene({triggerElement: ".next",triggerHook:1})
  //     .setTween("#myimg",0,{opacity:0})
  //     .addTo(controller);

  // Initialize Variables

});
